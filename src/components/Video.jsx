import React from 'react'
import sample from '../Video/Killers of the Flower Moon.mp4'

const Video = () => {
  return (
    <div>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
    </div>
  )
}

export default Video