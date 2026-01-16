import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const useGif = (tag) => {

   const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&timestamp=${Date.now()}`;
   const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&timestamp=${Date.now()}&tag=${tag}`;

   const [gif, setGif] = useState('');
   const [loading, setLoading] = useState(false);

   async function fetchData(tag) {
   setLoading(true);

   
    const { data } = await axios.get(tag?tagUrl:randomUrl);

    // Faster loading format
    const imgURL = data.data.images.fixed_width.webp;
    setGif(imgURL);

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return {gif,loading,fetchData}
}
