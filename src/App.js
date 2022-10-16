import {Manager} from "./components";
import React from "react";
// import { getPlacesData } from "./api";

const App = () => {

  // const [places, setPlaces] = useState([])

  // const[cords, setCords] = useState({})

  // const [bounds, setBounds] = useState(null)

  //pass places for api fetch, pass local stores jsons to save fetches
  //api fetch for neaby places when user asks
  //need to change api fetch from boundaries to nearby 
  //replace object in places={} 

  // useEffect(() => {
  //     getPlacesData().then((data) => {

  //        console.log(data)

  //       setPlaces(data)
  //     })
  // }, [])

  return (
    <>
    <Manager/>
    </>
  );
}

export default App;
