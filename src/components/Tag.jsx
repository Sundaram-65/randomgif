import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Spinner } from './Spinner.jsx';
export const Tag = () => {

  const[gif,setGif]=useState('');
  const [loading, setLoading] = useState(false);
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  const[tag,setTag]=useState('');
  async function fetchData() {
    setLoading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&timestamp=${Date.now()}&tag=${tag}`;
    const { data } = await axios.get(url);

    // Faster loading format
    const imgURL = data.data.images.fixed_width.webp;
    setGif(imgURL);

    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

    function changeHandler(e){
      setTag(e.target.value);
    }

   return (
      <div className='w-1/2 mx-auto bg-blue-600 mt-[40px] rounded-xl border-2 border-gray-400 flex flex-col items-center justify-center gap-y-3'>

      <h1 className='underline text-xl uppercase font-bold mt-4'>RANDOM {tag} GIF</h1>

      {loading ? (<Spinner></Spinner>) : (gif && <img src={gif} alt='GIF' width='450px' />)}

      <input type='text' className='w-11/12 bg-white opacity-70 rounded-md text-lg text-center py-1 mb-1' value={tag} onChange={changeHandler}/>

      <button
        onClick={fetchData}
        className='w-11/12 bg-white opacity-70 rounded-md text-lg py-1 mb-4'
      >
        GENERATE
      </button>
    </div>
   )

}
