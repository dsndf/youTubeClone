import axios from 'axios'

 

const options = {

  
  params: {
  
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOU_TUBE_API,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchData = async (url) => {
  console.log(process.env.YOU_TUBE_API) 
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, options);
     return data;
}