import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import Gun from './Gun'


const Guns= (props)=>{
  const {guns} = useContext(DataContext)
  useEffect(()=>{

  },[])
  const renderGuns = ()=>{
    return guns.map((g)=>{
      return <Gun key={g.id}{...g}/>
    })
  }
  return (
    <div className='border'>
      <h1>Gun List</h1>



      <div className='border'>
        <code>{renderGuns()}</code>
      </div>



      <div className='border'>
        <code>{JSON.stringify(guns)}</code>
      </div>

    </div>

  )

}

export default Guns