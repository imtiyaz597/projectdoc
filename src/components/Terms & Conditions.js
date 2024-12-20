import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">
          Terms and Conditions of Use
        </h1>
        <ol className="list-decimal list-inside text-gray-700 text-lg leading-relaxed space-y-6">
          <li>
            <strong>Acceptance of Terms:</strong> By accessing or using the Edzest Education Services website
            (hereinafter referred to as "the Website"), you agree to comply with and be bound by these terms and
            conditions. If you do not agree to these terms, please refrain from using our services.
          </li>
          <li>
            <strong>Use of Services:</strong> You agree to use the services provided by Edzest Education Services,
            including PMP certification exam prep training, solely for your personal and non-commercial use. Any
            unauthorized use, including but not limited to the reproduction, distribution, display, or transmission of
            content, is strictly prohibited.
          </li>
          <li>
            <strong>User Accounts:</strong> To access certain features of the Website, you may be required to create a
            user account. You are responsible for maintaining the confidentiality of your account information and agree
            to accept responsibility for all activities that occur under your account.
          </li>
          <li>
            <strong>Refund and Return Policy:</strong> Our refund and return policy is outlined separately. Please refer
            to the{" "}
            <a
              href="https://www.edzest.org/return-and-refund-policy"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.edzest.org/return-and-refund-policy
            </a>{" "}
            for detailed information.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsAndConditions;
