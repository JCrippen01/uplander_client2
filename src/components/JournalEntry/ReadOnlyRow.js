import React from "react";

const ReadOnlyRow = ({ entry, handleEditClick, handleDeleteClick }) => {
  
    return (
    <tr>
      <td>{entry?.title}</td>
      <td>{entry?.entry_date}</td>
      <td>{entry?.location}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, entry)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(entry?.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;