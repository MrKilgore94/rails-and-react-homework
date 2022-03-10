import React, { useEffect, useState } from "react";
import axios from 'axios'

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [guns, setGuns] = useState([]);
  useEffect(()=>{
    getGuns()

  },[])

  const getGuns = async()=>{
    try{
      let res = await axios.get('/api/guns')
      setGuns(res.data)
      console.log(res.data)
    }catch(err){
      alert('Error getting guns')
    }
  }

  const deleteGun = async (id) =>{
     try{
       let res = await axios.delete(`/api/guns/${id}`)
       let filteredGuns = guns.filter(f=> f.id !== res.data.id)
       setGuns(filteredGuns)

     }catch(err){
       alert('Error deleting')
     }
  }





  // create an object that will be 'global state'
  const gunProviderThing = {
    getGuns,
    deleteGun,
    guns,
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={gunProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
