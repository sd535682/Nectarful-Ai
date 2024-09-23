import {supabase} from '../lib/supabaseClient';
import Config from 'react-native-config';

// Supabase call
export const FruitData = () => {
  return supabase
    .from('fruitdb')
    .select('*')
    .then(({data, error}) => {
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        return data;
      }
    })
    .catch(error => {
      console.error('Unexpected error:', error.message);
    });
};

// Mistral API call
export const getSmoothieRecipe = fruits => {
  const smoothieAPI = Config.LLM_KEY; // Mistral API key
  const smoothieURL = Config.LLM_URL; // Mistral API endpoint
  const fruitList = fruits.map(fruit => fruit.name).join(', ');

  return fetch(smoothieURL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${smoothieAPI}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mistral-large-latest',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that creates short smoothie recipes based on given fruits.',
        },
        {
          role: 'user',
          content: `Create a smoothie recipe using ${fruitList} as the main ingredients without extral context. only Recipe name, ingredients and detailed instructions.`,
        },
      ],
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        throw new Error('No recipe generated');
      }
    })
    .catch(error => {
      console.error('Error fetching smoothie recipe:', error);
    });
};
