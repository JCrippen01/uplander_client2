import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import { createEntry } from "./EntryManager"
import "./NewEntry.css"
export const CreateEntry = () =>{
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
    const saveNewEntry = (e) => {
        e.preventDefault()

        const PostEntry = {
                title : addFormData.title,
                entry_date : Date.now(),
                duration : addFormData.duration,
                party : addFormData.party,
                location : addFormData.location,
                gear : addFormData.gear,
                hunt_highlights : addFormData.hunt_highlights
        }
    createEntry(PostEntry)
    .then(() => {
        history.push("/myentrys")
    })

    }
    return(
        <section className="newEntry_form">
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">New Journal</h1>

                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input 
                        onChange = { (e) => { const copy = {...addFormData}
                            copy.title = e.target.value
                            setAddFormData(copy)
                            }
                        }    

                    type="text" name="title"  className="form-control" placeholder="Title" required autoFocus />
                
                </fieldset>
                <fieldset>
                <label htmlFor="party"> Who did you go with </label>
                    <input 
                         onChange = { (e) => { const copy = {...addFormData}
                         copy.party = e.target.value
                         setAddFormData(copy)
                         }
                     }   
                        type="text" name="party" className="form-control" placeholder="party" required />
                </fieldset>
                
                <fieldset>
                <label htmlFor="location"> Where did you go</label>
                    <input
                         onChange = { (e) => { const copy = {...addFormData}
                         copy.location = e.target.value
                         setAddFormData(copy)
                         }
                     }    
                     type="text" name="location"  className="form-control" placeholder="location" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="gear"> Who did you go with </label>
                    <input
                         onChange = { (e) => { const copy = {...addFormData}
                         copy.gear = e.target.value
                         setAddFormData(copy)
                         }
                     }    
                     type="text" name="gear"  className="form-control" placeholder="gear" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="hunt_highlights">Trip Highlights </label>
                    <input  
                         onChange = { (e) => { const copy = {...addFormData}
                         copy.hunt_highlights = e.target.value
                         setAddFormData(copy)
                         }
                     }   
                    type="text" name="hunt_highlights"  className="form-control" placeholder="hunt_highlights" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="button" type="submit" onClick={saveNewEntry}>
                    Submit
                    </button>
                </fieldset>
            </form>
            </section>
    )
}
