import axios from 'axios';
// import { Cookies } from 'quasar';
import userAPI from './modules/user';
import medicineAPI from './modules/medicine';
import productAPI from './modules/product';
import clientAPI from './modules/client';
import appointmentAPI from './modules/appointment';
import patientAPI from './modules/patient';
import saleAPI from './modules/sale';
import recordAPI from './modules/record';
import authAPI from './modules/auth';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  crossDomain: true,
  timeout: 10000,
});

export const user = userAPI(api);
export const medicine = medicineAPI(api);
export const product = productAPI(api);
export const client = clientAPI(api);
export const appointment = appointmentAPI(api);
export const patient = patientAPI(api);
export const sale = saleAPI(api);
export const record = recordAPI(api);
export const auth = authAPI(api);
