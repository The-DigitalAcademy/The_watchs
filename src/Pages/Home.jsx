import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import AppleWatchPic from '../components/AppleWatchPic'

function Home() {
  return (
    <div>
        <Navbar />
        <AppleWatchPic />
        <Slider />
        <Footer />
    </div>
  )
}

export default Home