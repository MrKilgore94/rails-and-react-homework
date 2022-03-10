import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const GunShow= (props)=>{
  useEffect(()=>{
    getGun()
  },[])

  const {name, caliber, fireRate, country, id} = props
  const params = useParams()

  const [gunFromAPI, setGunFromAPI] = useState(null) 
  
const getGun = async()=>{
  try{
    let res = await axios.get(`/api/guns/${params.id}`)
    setGunFromAPI(res.data)
  }catch(err){

  }
}

  return (
    <div className='border'>
      <h1>Gun Show</h1>


      <div className='border'>
      <h1>Gun: </h1>
        <h3>Name:</h3>
        <h5>{gunFromAPI.name}</h5>
        <h3>Caliber:</h3>
        <h5> {gunFromAPI.caliber}</h5>
        <h3>Fire modes:</h3>
        <h5>{gunFromAPI.fireRate}</h5>
        <h3>origin country:</h3>
        <h5> {gunFromAPI.country}</h5>
        </div>
       <p>{JSON.stringify(gunFromAPI)}</p>
    </div>

  )

}

export default GunShow