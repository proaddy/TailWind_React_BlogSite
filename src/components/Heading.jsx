import React from 'react'

export default function Heading() {
  return (
    <>
        <nav className='flex place-content-between'>
            <div className='flex gap-4'>
                <img className='w-7 h-7' src="/icons8-github-96.png" alt="GitImg" />
                <a href='#'>Product</a>
                <a href='#'>Solutions</a>
                <a href='#'>Open Source</a>
                <a href='#'>Pricing</a>
            </div>
            <div className='flex gap-4'>
                <div className='flex gap-20 items-center bg-gray-200 rounded-md px-4'>
                    <span>search</span>/
                </div>
                <a href='#'>sign in </a>
                <a href='#'>sign up</a>
            </div>
        </nav>
        <span className='text-[190px] m-0 p-0 font-[heavyFont]'>CodingOdyssey</span>
        <hr className='h-2 bg-black rounded-md'/>
    </>
  )
}
