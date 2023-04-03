import axios from 'axios'
import { REACT_APP_GIPHY_API_URL } from "../utils/envs.js"

const giphyApi = axios.create({
    baseURL: REACT_APP_GIPHY_API_URL,
})

export { giphyApi }