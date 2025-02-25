import React from 'react'
import { Link } from 'react-router-dom'
function Start() {
return (
    <div>
        <div className='bg-[url("/assets/Home.png")] bg-bottom bg-cover flex pt-8 justify-between flex-col h-screen w-full '>
            <img className='w-15 ml-8' src='https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc' alt="" srcset="" />
            <div className='bg-white pb-7 px-4 py-5'>
                <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className=' cursor-pointer flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
)
}

export default Start