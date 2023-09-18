// PasswordResetPopup.js
import { useState } from 'react';

interface PasswordResetPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onResetPassword: () => void;
  }
  
  export default function PasswordResetPopup({
    isOpen,
    onClose,
    onResetPassword,
  }: PasswordResetPopupProps) {
  const closePopup = () => {
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-800 opacity-50" onClick={closePopup}></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closePopup}>
              Close
            </button>
            <h2 className="text-2xl font-semibold mb-4">Forgot Password?</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              // Use ref or state to capture the email input value
            />
            <button
              onClick={onResetPassword}
              className="bg-orange hover:bg-orange text-white font-bold py-2 px-4 rounded-full w-50"
            >
              Send Password Reset Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
