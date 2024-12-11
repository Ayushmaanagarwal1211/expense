import React,{useState,useEffect} from 'react'
import { FaHandLizard } from 'react-icons/fa'
import { getData } from '../service/localstorage'

export default function FilterDropdown({expense,dispatch,handleSelectedCategories}) {
    let [categories,setCategories] = useState([])
    useEffect(()=>{
        let arr = []
        for(let i of getData()){
          if(!arr.includes(i.category)){
            arr.push(i.category)
          }   
        }
        setCategories([...arr])
    },[expense])

    
  return (
    <>
    <h1>Filter </h1>

        {
            categories.map((data,index)=>{
              return <div onClick={()=>handleSelectedCategories(data)}>
              <input type='checkbox' id={index} ></input>  
              <label htmlFor={index}>{data}</label>
            </div>})
        }
    </>
  )
}
