import axios from axios;
import crypto from "crypto";
import {Volunteer} from "../models/volunteer.js"


// base url

const cryptomus = axios.create({baseURL:""})

// const createInvoice = async(amount) =>{
// try{
//   const data = {
//     amount :amount,
//     currency
//   }
// }
// }