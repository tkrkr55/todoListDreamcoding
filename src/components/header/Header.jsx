import React,{useState} from 'react'

export default function Header({lists,list,onChangelist}) {
 
  return (
    <ul>
      {
        lists.map((value,index)=>(
          <li key={index}>
            <button onClick={()=>onChangelist(value)}>{value}</button>
          </li>
        ))
      }
    </ul>
  )
}
