import axios from "axios";

const axiosInstance = axios.create({
baseURL:"https://6905e69aee3d0d14c13413c6.mockapi.io/api/v1",
headers:{
    "Content-Type":"application/json"
}
})


export default axiosInstance
