import axios from "axios";
import {url, authKey, smoothieAPI, smoothieURL } from '../lib/env'

// Supabase API call
export const FruitData = () => {
  return axios.get(
    `${url}`,{headers: {
      'apiKey' : `${authKey}`
    }}
  ).then(response => response.data).catch(error => console.log(error));}


// Meta LLama3 8b API call
export const getSmoothieRecipe = (fruit) => {
  return fetch(`${smoothieURL}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${smoothieAPI}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "Meta-Llama-3-8B-Instruct",
      "messages": [
        {"role": "system", "content": "You are a helpful assistant that creates short smoothie recipes based on a given fruits."},
        {"role": "user", "content": `Create a smoothie recipe using ${fruit} as the main ingredient.`}
      ],
      "repetition_penalty": 1.1,
      "temperature": 0.7,
      "top_p": 0.9,
      "top_k": 40,
      "max_tokens": 1024,
      "stream": false
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      throw new Error('No recipe generated');
    }
  });
}