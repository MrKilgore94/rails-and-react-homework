import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'

const Guns= (props)=>{
  const {guns} = useContext(DataContext)
  useEffect(()=>{

  },[])
  return (
    <div className='border'>
      <h1>Guns</h1>
      <div className='border'>
        <code>{JSON.stringify(guns)}</code>
      </div>

    </div>

  )

}

export default Guns