import React from 'react'
import { CDN_URL } from '../utils/constants';
const ListMindImage = (resData) => {
    console.log("hiii",resData.id);
    const {id,imageId,action} =resData;
  return (
    <div className='box w-36'>
    <img
        alt={action?.text}
        src={CDN_URL + imageId}
        className="object-cover"
        />
    </div>
  )
}

export default ListMindImage