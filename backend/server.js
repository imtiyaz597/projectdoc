require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const filePath = path.join(__dirname, 'contacts.xlsx');

function saveToExcel(data) {
  try {
    let workbook, worksheet;

    if (fs.existsSync(filePath)) {
      workbook = xlsx.readFile(filePath);
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
      workbook = xlsx.utils.book_new();
      worksheet = xlsx.utils.aoa_to_sheet([['Name', 'Email', 'Message']]);
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Contacts');
    }

    const existingData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    existingData.push(data);

    const updatedWorksheet = xlsx.utils.aoa_to_sheet(existingData);
    workbook.Sheets[workbook.SheetNames[0]] = updatedWorksheet;

    xlsx.writeFile(workbook, filePath);
  } catch (err) {
    console.error('Error handling Excel file:', err);
    throw new Error('Failed to process Excel file.');
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // App Password
  },
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message || !/\S+@\S+\.\S+/.test(email)) {
    console.error('Validation failed: Missing or invalid fields');
    return res.status(400).json({ error: 'All required fields must be valid!' });
  }

  try {
    saveToExcel([name, email, message]);
    console.log('Data saved successfully!');

    const mailOptions = {
      from: email,
      to: 'contact@edzest.org',
      subject: `New Contact Form Submission from ${name}`,
      text: `Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending failed:', error.message);
        return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Data saved and email sent successfully!' });
    });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});