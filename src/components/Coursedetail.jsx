import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../utility/coursedata'
import Card from './Landingpage/Card'
import Coursecard from './Landingpage/Coursecard'
import Plans from './Landingpage/Plans'


const Coursedetail = () => {
const [overview ,setOvervier] = useState(true)
const [attachment ,setattachment] = useState(false)

    const params = useParams()
    const title = params.couseid
const Cousese = courses.find((data)=>data.title === title )
  return (
   <>
    <h1>{params.couseid}</h1>

    {Cousese ?
    
(<Card {...Cousese}/>) : <h1>no data found</h1>
    }

    {overview && <Coursecard />}
    {attachment && <Plans />}

    <button className='p-2 bg-red-500 rounded-md'
    onClick={()=>{
        setOvervier(true)
        setattachment(false)
    }}
    >overview</button>
    <button
    className='p-2 bg-green-500 rounded-md'
     onClick={()=>{
        setOvervier(false)
        setattachment(true)
    }}
    >attachment</button>
   </>
  )
}

export default Coursedetail