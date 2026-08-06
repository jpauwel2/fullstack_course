import axios from 'axios'

const URL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = async () => {
    const response = await axios.get(URL)
    return await response.data
}

export default {
    getAll
}