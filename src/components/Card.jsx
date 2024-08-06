import React from 'react'

export const Card = ({ children, text }) => {
  return (
    <div className='hover:bg-pink-600 transition w-full rounded-lg flex flex-col items-center justify-center py-40'>
        { children }
        <p className='text-2xl mt-8'>{ text }</p>
    </div>
  )
}
