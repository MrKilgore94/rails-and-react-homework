import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'
import GunShow from './GunShow'

const Gun= (props)=>{
  const navigate = useNavigate()
  const {deleteGun} = useContext(DataContext)
  const {name, caliber, fireRate, country, id} = props
  return (
    <div className='border'>
      <h1>Gun: </h1>
        <h3>Name:</h3>
        <h5>{name}</h5>
        <h3>Caliber:</h3>
        <h5> {caliber}</h5>
        <h3>Fire modes:</h3>
        <h5>{fireRate}</h5>
        <h3>origin country:</h3>
        <h5> {country}</h5>



        <div className='border' style={{display:'flex', justifyContent: 'space-around'}}>
        <button onClick={()=>navigate(`/guns/${id}`)}>View</button>
        <button onClick={()=>navigate(`/guns/${id}/edit`)}>Update</button>
        <button onClick={()=>deleteGun(id)}>Delete</button>
        </div>
        

    </div>

  )

}

export default Gun