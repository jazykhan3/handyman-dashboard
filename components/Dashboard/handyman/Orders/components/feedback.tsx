import React, { useState } from 'react';

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the feedback submission here
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md shadow-lg w-96">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Give Feedback</h2>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-600">
                Rating:
              </label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} htmlFor={`star${star}`}>
                    <input
                      type="radio"
                      id={`star${star}`}
                      name="rating"
                      value={star}
                      checked={rating === star}
                      onChange={() => handleRatingChange(star)}
                      className="sr-only" // Hide the radio input
                    />
                    ⭐️ {/* You can use a star emoji or any other star representation here */}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-gray-600">
                Feedback:
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows={4}
                className="w-full px-3 py-2 border rounded-md"
                value={feedback}
                onChange={handleFeedbackChange}
                required
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-orange text-white px-4 py-2 rounded-md hover:bg-orange"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-25 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      ></div>
    </div>
  );
};

export default FeedbackPopup;
