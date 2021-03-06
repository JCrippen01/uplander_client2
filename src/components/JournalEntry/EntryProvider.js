export const getEntrys = () => {
    return fetch("http://localhost:8000/entrys", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        }
    })
        .then(response => response.json())
        }

export const createEntry = (entry) => {
        return fetch("http://localhost:8000/entrys", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("journal_user_id")}`,
                "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
             })
                .then(response => response.json())
        }
export const updateEntry = (entry, id) => {
    return fetch(`http://localhost:8000/entrys/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        },
        body: JSON.stringify(entry)
    })

}

export const getEntryId = (entryId) => {
    return fetch(`http://localhost:8000/entrys/${entryId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        }
    })
        .then(response => response.json())
}
export const deleteEntry = (id) => {
    return fetch(`http://localhost:8000/entrys/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`,
            "Content-Type": "application/json"
        },
    })
}
export const updateDogEntry = (id, dogId) => {
    return fetch(`http://localhost:8000/entrys/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journal_user_id")}`
        },
        body: JSON.stringify({dogs: dogId})
    })

}