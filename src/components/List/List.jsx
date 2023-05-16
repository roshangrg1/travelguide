import React, { useState } from 'react'
import './List.scss'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('')

  // dummy data

  const places = [
    { name: 'CCool place' },
    { name: 'best place' },
    { name: 'CCool place' },
    { name: 'best place' },
    { name: 'CCool place' },
    { name: 'best place' },
    { name: 'CCool place' },
    { name: 'best place' },
    { name: 'CCool place' },
    { name: 'best place' }
  ]

  return (
    <div className='container'>
      <h4>Restaurants $ Hotels near you</h4>

      <div className="formsControl">
        <div className="formControl">
          <label for="type">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>

        <div className="formControl">
          <label for="rating">Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>

      <div className="list">
        {places?.map((place, i) => (
          <div key={i}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default List