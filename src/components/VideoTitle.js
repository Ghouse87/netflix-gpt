import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pl-20 bg-graditent-to-r from-black' >
      <h1 className='mt-36 text-6xl font-bold text-white'>{title}</h1>
      <p className='text-lg w-1/4 text-white'>{overview}</p>
      <div>
      <button className='bg-white text-black p-4 px-12 rounded-lg text-lg hover:bg-opacity-50 '> Play</button>
      <button className='mx-2 bg-gray-500 text-black p-4 px-12 rounded-lg text-lg bg-opacity-50'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle