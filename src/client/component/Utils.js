
import axios from 'axios';

export const SendData =( url , data )=> axios.post( url , data , { headers:{ "Content-Type" : "application/json"} , withCredential : true })

export const GetData = ( url , data) => axios.get( url , data , { headers:{ "Content-Type" : "application/json"} , withCredential : true } )
