import React from 'react'
import sample from '../Video/Killers of the Flower Moon.mp4'

const Video = () => {
  return (
    <div>
        <video className='videoTag'>
            <source src={sample} type='video/mp4' />
        </video>
    </div>
  )
}

export default Video