import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { updateEntry } from "./EntryManager"
export const EditEntry = () =>{
    const [addFormData, setAddFormData] = useState({
        title: "",
        date: "",
        duration: "",
        party: "",
        location: "",
        gear: "",
        hunt_highlights: "",
      });


    const history = useHistory()
    const saveEntry = (e) => {
        e.preventDefault()

        const PostEntry = {
                user_id : parseInt(localStorage.getItem("journal_user_id")),
                title : addFormData.title,
                entry_date : Date.now(),
                duration : addFormData.duration,
                party : addFormData.party,
                location : addFormData.location,
                gear : addFormData.gear,
                hunt_highlights : addFormData.hunt_highlights
        }
     updateEntry(PostEntry)
     .then(() => {
         history.push("/myentrys")
        })

    
    }
    return(
        
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">Edit Entry</h1>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input  
                    onChange = { (e) => { const copy = {...addFormData}
                    copy.title = e.target.value
                    setAddFormData(copy)
                    }
                }    
                    type="text" name="title"  className="form-control" placeholder="Title" />
                        
                    
                </fieldset>
                <div className = "form-box">
                <fieldset>
                    <label htmlFor="party"> Who did you go with </label>
                    <input
                    onChange = { (e) => { const copy = {...addFormData}
                    copy.party = e.target.value
                    
                    }
                }    
                    type="text" name="party"  className="form-control" placeholder="party" />
                        setParty(event.target.value)
                    
                </fieldset>
                <fieldset>
                    <label htmlFor="location"> Where did you go</label>
                    <input 
                    onChange = { (e) => { const copy = {...addFormData}
                    copy.location = e.target.value
                    setAddFormData(copy)
                    }
                }    
                    type="text" name="location"  className="form-control" placeholder="location" />
                        
                   
                </fieldset>
                <fieldset>
                    <label htmlFor="gear"> Who did you go with </label>
                    <input  
                    onChange = { (e) => { const copy = {...addFormData}
                    copy.gear = e.target.value
                    setAddFormData(copy)
                    }
                }    
                    type="text" name="gear"  className="form-control" placeholder="gear" />
                        
                    
                </fieldset>

                <fieldset>
                    <label htmlFor="highlights">Trip Highlights </label>
                    <input  
                    onChange = { (e) => { const copy = {...addFormData}
                    copy.hunt_highlights = e.target.value
                    setAddFormData(copy)
                    }
                }    
                    type="text" name="hunt_highlights"  className="form-control" placeholder="highlights" />
                </fieldset>
                </div>
                <button className="editPost" onClick={(e) => {saveEntry(e)}}>
                    Save Edits</button>
                
        </form>
    
    )
}