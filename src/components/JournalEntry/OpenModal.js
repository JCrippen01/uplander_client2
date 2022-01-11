import React, { useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDogs } from "./DogProvider";
import { updateDogEntry } from "./EntryProvider";




export const OpenModal = () => {
  const { entryId } = useParams();
  let history = useHistory()
  const [dogs, setDogs] = useState([]);
  const [dogId, setDogId] = useState([]);

  const index = []

  const handleClickEvent = () => {
    
    updateDogEntry(entryId, dogId)
      .then(data => history.push("/myentrys"))
  }
  

  const handleOnChange = (e) => {

  const dogIdArray = [...dogId]  

  if(dogIdArray.includes(parseInt(e.target.value))){
    const index = dogIdArray.indexOf(parseInt(e.target.value))
    dogIdArray.splice(index, 1)
    setDogId(dogIdArray)
  }else{ 
  dogIdArray.push(parseInt(e.target.value))
  setDogId(dogIdArray)
  console.log(dogId)
  }
  };

  console.log(entryId);

  useEffect(() => {
    getDogs().then((data) => {
      setDogs(data);
    });
  }, []);

  return (
    <>
      {dogs.map((dog) => {
        return (
          <>
            {" "}
            <input
              type="checkbox"
              value={dog.id}
              name={dog.name}
              onChange={handleOnChange}
            />
            {dog.name}
            {dog.id}
          </>
        );
      })}
      <button className="button" type="submit"
        onClick={handleClickEvent}>Save Dogs</button>
    </>
  );
};
export default OpenModal;
