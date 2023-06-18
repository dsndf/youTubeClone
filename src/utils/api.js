import axios from 'axios'
const Base_url = 'https://youtube138.p.rapidapi.com';
 

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
    const { data } = await axios.get(`https://youtube138.p.rapidapi.com/${url}`, options);
     return data;
}