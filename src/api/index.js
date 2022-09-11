import axios from 'axios'

const BASE_URL = "https://autoclanserver.herokuapp.com/api/v1/";

export const createGuestToken = async()=>{
    try{
        const res = await axios.post(`${BASE_URL}/auth/guest/createToken`)
        localStorage.setItem("accessToken", res.data.token)
    }catch(e){
        window.location.reload()
    }
}

export const createWaitList = async(data)=>{
    try{
        const token = localStorage.getItem("accessToken");
        const res = await axios.post(`${BASE_URL}/waitlist/create`, data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const _r = res.data;
        return _r;
    }catch(e){
        console.log(e)
        return {
            status: false,
            reason: "Already in waitlist"
        }
    }
}

export const getWaitList = async()=>{
    try{
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(`${BASE_URL}/waitlist/get`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const _r = res.data;
        return _r;
    }catch(e){
        console.log(e)
        return {
            status: false,
            reason: "Network Error, refresh or contact admin"
        }
    }
}