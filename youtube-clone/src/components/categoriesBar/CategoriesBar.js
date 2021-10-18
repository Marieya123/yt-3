import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import "./_categoriesBar.scss"


const keywords = [
    'All',
    'Explore',
    'Nature',
    'Funny Reactions',
    'Recycle',
    'Red velvet cupcake',
    'Music',
    'Art',
    'Guitar',
    'English Songs',
    'Coding',
    'Makeup',
    'Football',
    'Real Madrid',
    'Garfield',
    'ASMR',
    'Movies',
 ]

const CategoriesBar = () => {
   const[activeElement, setActiveElement] = useState('All') 
    
     const dispatch= useDispatch()
    const handleClick =(value) =>{
        setActiveElement(value)
        if(value==='All'){
           dispatch(getPopularVideos())
        }
        else{
       dispatch(getVideosByCategory(value))
      }
   }
   return (
   <div className="categoriesBar">
      {keywords.map((value,i) => (
         <span   
           onClick={() => handleClick(value)} 
           key={i}
           className={activeElement === value ? 'active' : ''}>   
          {value}
           </span>
         ))}
      </div>
    )
 }

export default CategoriesBar
