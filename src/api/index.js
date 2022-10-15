import axios from "axios";

const ReURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const AtURL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'

const Reoptions = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '26.45199393164981',
      tr_latitude: '26.38788746839347',
      bl_longitude: '-81.86625445831068',
      tr_longitude: '-81.73905338280298',
      limit: '30',
      offset: '0',
      currency: 'USD',
      lunit: 'mi',
      lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': '2607f9ae6dmsha5075e5abc648bdp175e6djsn8c704c47050b',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  const Atoptions = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary',
    params: {
      tr_longitude: '-82.10730039125534',
      tr_latitude: '26.764133272019784',
      bl_longitude: '-81.89478361463112',
      bl_latitude: '26.545666202816964',
      offset: '120',                                                
      currency: 'USD',
      lunit: 'mi',
      lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': '2607f9ae6dmsha5075e5abc648bdp175e6djsn8c704c47050b',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  //Fort Myers first bounds
  //26.686672242267544, -81.79685427248056
  //26.556982587049433, -81.89845431759495
  
  //Fort Myers second bounds
  //26.55511005913456, -81.92291544075472 top left
  //26.446946759810817, -81.66838160513242 bot right


  //Fort Myers Beach
  //26.52513830881788, -82.02494943987075
  //26.40590279041587, -81.87018186603778

  //Cape Coral First Bounds
  //26.764133272019784, -82.10730039125534
  //26.545666202816964, -81.89478361463112


  //Naples First Bounds
  //26.211785232906223, -81.82304705162012
  //26.077444034479505, -81.75968420658258

  //Estero First Bounds
  //26.45199393164981, -81.86625445831068
  //26.38788746839347, -81.73905338280298

export const getPlacesData = async() => {
    // try{
    //     const {data: {data}} = await axios.get(ReURL, Reoptions)

    //     return data

    // }catch(error){
    //     console.log(error)
    // }
}