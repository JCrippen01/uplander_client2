import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { updateDog, getDogId } from "./DogManager"
import "./EditDog.css"


export const EditDog = () =>{
    
    const [editFormData, setEditFormData] = useState({
        name: "",
        breed: "",
        sex: "",
        age: "",
        description: ""
      });
    const [editDogId, setEditDogId] = useState(null);
    const { dogId } = useParams()  
    const handleCancelClick = () => {
        setEditDogId(null);
      };
    const history = useHistory()

    useEffect(() => {
        getDogId(dogId)
        .then((data) => {setEditFormData(data)})
    }, [])

 

    const saveDog = (e) => {
        e.preventDefault()

        const PostDog = {
                user_id : parseInt(localStorage.getItem("journal_user_id")),
                title : editFormData.title,
                dog_date : Date.now(),
                duration : editFormData.duration,
                party : editFormData.party,
                location : editFormData.location,
                gear : editFormData.gear,
                hunt_highlights : editFormData.hunt_highlights
        }
     updateDog(PostDog, dogId)
     .then(() => {
         history.push("/mydogs")
         
        })
    
      
    }
    return (
        
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">Edit Dog</h1>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input  
                    onChange = { (e) => { const copy = {...editFormData}
                    copy.title = e.target.value
                    setEditFormData(copy)
                    }
                }    
                    type="text" name="title"  className="form-control" placeholder="Title" />
                        
                    
                </fieldset>
                <div className = "form-box">
                <fieldset>
                    <label htmlFor="party"> Who did you go with </label>
                    <input
                    onChange = { (e) => { const copy = {...editFormData}
                    copy.party = e.target.value
                    setEditFormData(copy)
                    }
                }    
                    type="text" name="party"  className="form-control" placeholder="party" />
                        setParty(event.target.value)
                    
                </fieldset>
                <fieldset>
                    <label htmlFor="location"> Where did you go</label>
                    <input 
                    onChange = { (e) => { const copy = {...editFormData}
                    copy.location = e.target.value
                    setEditFormData(copy)
                    }
                }    
                    type="text" name="location"  className="form-control" placeholder="location" />
                        
                   
                </fieldset>
                <fieldset>
                    <label htmlFor="gear"> Who did you go with </label>
                    <input  
                    onChange = { (e) => { const copy = {...editFormData}
                    copy.gear = e.target.value
                    setEditFormData(copy)
                    }
                }    
                    type="text" name="gear"  className="form-control" placeholder="gear" />
                        
                    
                </fieldset>

                <fieldset>
                    <label htmlFor="highlights">Trip Highlights </label>
                    <input  
                    onChange = { (e) => { const copy = {...editFormData}
                    copy.hunt_highlights = e.target.value
                    setEditFormData(copy)
                    }
                }    
                    type="text" name="hunt_highlights"  className="form-control" placeholder="highlights" />
                </fieldset>
                </div>
                <button className="editPost" onClick={(e) => {saveDog(e)}}>
                    Save Edits</button>
                
        </form>
    )
}
  