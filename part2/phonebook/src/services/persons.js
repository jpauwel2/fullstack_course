import axios from 'axios'

const baseURL = '/api/persons'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return await response.data
}

const create = async newObject => {
    const response = await axios.post(baseURL, newObject)
    return await response.data
}

const update = async (id, newObject) => {
    const response = await axios.put(`${baseURL}/${id}`, newObject)
    return await response.data
}

const delete_record = async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`)
    return await response.data
}

export default {
    getAll,
    create,
    update,
    delete_record
}