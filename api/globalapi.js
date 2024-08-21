import { supabase } from "../lib/supabaseClient.js";

export const FruitData = () => {
  return supabase.from('fruitdb').select('*')
  .then(({ data, error }) => {
    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
    return data;
    }
  })
  .catch((error) => {
    console.error('Unexpected error:', error.message);
  });
};


// Meta LLama3 8b API call
export const getSmoothieRecipe = (fruit) => {
  const smoothieAPI = process.env.EXPO_PUBLIC_SMOOTHIEAPI
  const smoothieURL = process.env.EXPO_PUBLIC_SMOOTHIEURL
  const fruitList = fruit.map(fruit => fruit.name).join(',');
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
        {"role": "user", "content": `Create a smoothie recipe using ${fruitList} as the main ingredients.`}
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