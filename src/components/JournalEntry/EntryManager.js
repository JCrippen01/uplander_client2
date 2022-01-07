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
export const UpdateEntry = (entry) => {
    return fetch(`http://localhost:8088/entrys/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}

