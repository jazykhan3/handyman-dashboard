import React from 'react';
import { FaCheck, FaCheckCircle, FaEdit, FaTimes, FaTimesCircle, FaTrash } from 'react-icons/fa';

interface StatusButtonProps {
  status: string;
  showIcons?: boolean;
  showEditIcon?: boolean;
  onEditClick?: () => void; // Define the onEditClick prop function
}

const StatusButton: React.FC<StatusButtonProps> = ({ showIcons = true, showEditIcon = true, status, onEditClick }) => {
  const getStatusStyles = () => {
    let styles = 'rounded px-3 py-1 cursor-pointer flex gap-2 items-center capitalize';
    
    if (status === 'complete') {
      styles += ' bg-[#ff691880]';
    } else if (status === 'deleted') {
      styles += ' bg-[#FA4017]';
    } else if (status === 'open') {
      styles += ' bg-[#67B554]';
    } else if (status === 'accepted') {
      styles += ' bg-[#fff61880]';
    }
    return styles;
  };

  const getStatusIcon = () => {
    if (status === 'complete' || status === 'open') {
      return <FaCheck className="mr-1" />;
    } else if (status === 'deleted') {
      return <FaTimesCircle className="mr-1" />;
    }
  };

  const handleEditClick = () => {
    // Call the onEditClick prop function when the edit icon is clicked
    if (onEditClick) {
      onEditClick();
    }
  };
  const isClientSide = typeof window !== 'undefined';

  return (
    <div className='flex items-center gap-2'>
      {((showEditIcon && showIcons) || (status =='open' && showIcons)) && (
        <span className='flex gap-1' onClick={handleEditClick}>
          <FaTrash  style={{cursor:'pointer'}} fontSize={20}/>
          <FaEdit style={{cursor:'pointer'}} fontSize={20}/>
        </span>
      )}
      <div className={getStatusStyles()}>
        {(status == 'open' && isClientSide && !window.location.pathname.includes('/client') )? 'Request Open' : status} {getStatusIcon()}
      </div>
    </div>
  );
};

export default StatusButton;
