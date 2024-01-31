import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './ShowDetails.css'

const ShowDetails = () => {
    const [showData , setshowData ] = useState(JSON.parse(localStorage.getItem('showdetails')))
   
  return (


    <div className="show-details-container">
    <div className="show-details">
    <div className="show-image">
      {showData.image!==null?<img src={showData.image.medium} alt={showData.name} />
      :
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"/>
      }
    </div>
    
    <div className="show-info">
      <h1>{showData.name}</h1>
      
      <p><strong>Genres:</strong> {showData.genres.join(', ')}</p>
      {showData.runtime &&<p><strong>Runtime:</strong> {showData.runtime} minutes</p>}
      { showData.rating.average &&<p><strong>Rating:</strong> {showData.rating.average}</p>}
      <div dangerouslySetInnerHTML={{ __html: showData.summary }} />
    </div>
  </div>
  </div>
  )
}

export default ShowDetails