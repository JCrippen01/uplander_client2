import React, { useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UpdateEntry } from "./EntryManager";




const EditableRow = ({

  entry,  
  editFormData,
  handleEditClick,
  handleEditFormChange,
  handleCancelClick,
}) => {
const history =useHistory()

const [EditData, SetEditData] =useState({
  Location: entry.location,
  Title: entry.title,
  Date: entry.entry_date
})
  
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={EditData.Title}
          onChange= {(e) =>
          {
            let copy= {...EditData}
            copy.Title = e.target.value
            SetEditData(copy)
          }
          }
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="date"
          name="date"
          value={EditData.Date}
          onChange= {(e) =>
            {
              let copy= {...EditData}
              copy.Date = e.target.value
              SetEditData(copy)
            }
            }
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Location..."
          name="location"
          value={EditData.Location}
          onChange= {(e) =>
            {
              let copy= {...EditData}
              copy.Location = e.target.value
              SetEditData(copy)
            }
            }
        ></input>
      </td>
      
      <td>
    
                    <button className="button  " type="submit" onClick={()=>{
                        UpdateEntry(entry.id).then(history.push("/myentry"))
                    }}
                    >Save Edits</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow