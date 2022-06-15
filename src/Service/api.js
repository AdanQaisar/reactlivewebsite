import axios from 'axios';

const url  = "http://localhost:5000";


export const addApplicant = async (user) => {
   return await axios.post(`${url}/Register` , user);
}


