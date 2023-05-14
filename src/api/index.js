import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
   
  },
  headers: {
    'X-RapidAPI-Key': '1c82fa12c4mshbbc6083ecb60092p1f677fjsn3e1c796e9399',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


const getPlaceData = async () =>{
    try {
        const {data: {data}}= await axios.get()
        return data
    } catch (error) {
        console.log(error.message)
    }
}