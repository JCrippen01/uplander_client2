import React from "react";

const EditableRow = ({
  entry,  
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
    
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={entry.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Date"
          name="date"
          value={entry.entry_date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Location..."
          name="location"
          value={entry.location}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;