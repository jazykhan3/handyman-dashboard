import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimesCircle } from 'react-icons/fa';

interface EditPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newTitle: string, newParagraph: string, newDate: string, newTime: string) => void;
  initialTitle: string;
  initialParagraph: string;
  initialDate: string;
  initialTime: string;
  imagesData:any[];
}

const EditPopup: React.FC<EditPopupProps> = ({
  isOpen,
  onClose,
  onSave,
  initialTitle,
  initialParagraph,
  initialDate,
  initialTime,
  imagesData
}) => {
  const [newTitle, setNewTitle] = useState<string>(initialTitle);
  const [newParagraph, setNewParagraph] = useState<string>(initialParagraph);
  const [newDate, setNewDate] = useState<string>(initialDate);
  const [newTime, setNewTime] = useState<string>(initialTime);

  const handleSave = () => {
    onSave(newTitle, newParagraph, newDate, newTime);
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
            <h2 className="text-xl font-semibold mb-4">Edit Order</h2>
            <label>Images</label>
            <div className="flex " >{imagesData?.map(({ id, img }) => (
          <div key={id} style={{height:80}}>
            <FaTimesCircle style={{position:'absolute',zIndex:99}} />
            <Image src={img} alt={`crousel ${id}`} width={60} height={60}  style={{maxHeight:60,position:'relative'}} className="object-cover  p-2 rounded-2xl"/>
          </div>
        ))}</div>
            <label>Title:</label>
            <textarea
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
            />
            <label>Paragraph:</label>
            <textarea
              value={newParagraph}
              onChange={(e) => setNewParagraph(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
            />
            <label>Date:</label>
            <input
              type="text"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
            <label>Time:</label>
            <input
              type="text"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleSave}
                className="bg-orange text-white px-4 py-2 rounded-md hover:bg-orange"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-600 ml-4 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
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

export default EditPopup;
