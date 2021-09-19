import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseUrl)
        .then(
            response => response.data
        )
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson)
        .then(
            response => response.data
        )
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const changeNumber = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson)
}

const services = {
    getAll: getAll,
    create: create,
    remove: remove,
    changeNumber: changeNumber
}

export default services