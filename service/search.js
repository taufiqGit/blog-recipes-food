import axios from "axios"

export const HitSearch = async (q)=>{
    const response = await axios.get(`ap/api/search/?q=${q}`)
    return response
}