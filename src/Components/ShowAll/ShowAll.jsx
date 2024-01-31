import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ShowAll.css'
import {Link} from 'react-router-dom'
const ShowAll = () => {

  const [Shows, setShows] = useState([])


  
    const fetchData = async () => {
        try {
        
          const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
          const data = response.data;
      
          console.log(data);
          setShows(data)
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
      useEffect(() => {
        fetchData()
      }, [])
      


      const setshowdetails = (show)=>{
        localStorage.setItem('showdetails', JSON.stringify(show));
        
      }
  return (


    <div className='ShowAll' >

      <h1>Shows</h1>

      <div className='Shows-container '>
        
      {
        Shows.map((item,index)=>
        (  
        <div onClick={()=>{setshowdetails(item.show)}} key={index} className='show-box' >
          { item.show.image!==null?
          <img src={item.show.image.medium} alt="" />
          :
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019" alt="" /> }


        <div className="upper-box">
          <p>{item.show.name}</p>
          <div></div>
        </div>

        <div className="lower-box">
          <Link to={`/ShowDetails/${item.show.id}` } className='button' >Show More</Link>
        </div>

          </div>
        ))
      }
      
      </div>
    </div>
  )
}

export default ShowAll