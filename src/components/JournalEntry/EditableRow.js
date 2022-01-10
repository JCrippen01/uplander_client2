import React, { useState} from "react";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
>>>>>>> e77f3e22869dc9393ef893582dc81c135296add7
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
<<<<<<< HEAD
  location: entry.location,
  title: entry.title,
  date: entry.entry_date
=======
  Location: entry.location,
  Title: entry.title,
  Date: entry.entry_date
>>>>>>> e77f3e22869dc9393ef893582dc81c135296add7
})
  
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={EditData.title}
          onChange= {(e) =>
          {
            let copy= {...EditData}
            copy.title = e.target.value
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
          value={EditData.date}
          onChange= {(e) =>
            {
              let copy= {...EditData}
              copy.date = e.target.value
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
          value={EditData.location}
          onChange= {(e) =>
            {
              let copy= {...EditData}
              copy.location = e.target.value
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