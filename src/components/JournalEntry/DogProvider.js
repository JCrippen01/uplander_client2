export const getDogs = () => {
    return fetch("http://localhost:8000/dogs", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        }
    })
        .then(response => response.json())
        }

export const getDog = (id) => {
    return fetch("http://localhost:8000/dogs${id}", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        }
    })
        .then(response => response.json())
        }

export const updateDog = (newData, id) => {
    return fetch(`http://localhost:8000/dogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        },
        body: JSON.stringify(newData)
    })

}
export const addDog = (dog) => {
    return fetch("http://localhost:8000/dogs", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`,
            "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
         })
            .then(response => response.json())
    }

export const deleteDog = (id) => {
    return fetch(`http://localhost:8000/dogs/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`,
            "Content-Type": "application/json"
        },
    })
}