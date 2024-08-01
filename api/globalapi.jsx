import axios from "axios";
import {url, authKey } from '../expo-env.d.ts'

export const FruitData = () => {
  return axios.get(
    `${url}`,{headers: {
      'apiKey' : `${authKey}`
    }}
  ).then(response => response.data).catch(error => console.log(error));}
