const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow communication with frontend

const filePath = path.join(__dirname, 'contacts.xlsx');

// Function to save data to Excel
function saveToExcel(data) {
  let workbook;
  let worksheet;

  // Check if file exists
  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
  } else {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.aoa_to_sheet([['First Name', 'Last Name', 'Email', 'Phone', 'Subject', 'Message']]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Contacts');
  }

  const existingData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
  existingData.push(data); // Add new row

  const updatedWorksheet = xlsx.utils.aoa_to_sheet(existingData);
  workbook.Sheets[workbook.SheetNames[0]] = updatedWorksheet;

  xlsx.writeFile(workbook, filePath);
}

// POST endpoint for handling form submission
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, subject, message, name } = req.body;

  // Determine which fields to use
  const row = name
    ? [name, '', email, '', '', message] // From ContactUs form
    : [firstName, lastName, email, phone, subject, message]; // From ContactSection form

  if (!email || !message || (!name && !firstName)) {
    return res.status(400).send('All required fields must be provided!');
  }

  try {
    saveToExcel(row);
    res.status(200).send('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data to Excel:', error);
    res.status(500).send('Failed to save data.');
  }
});

const PORT = 5000; // Server runs on port 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
