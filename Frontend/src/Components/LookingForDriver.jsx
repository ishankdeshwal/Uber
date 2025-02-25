import React from 'react'

function LookingForDriver(props) {
  return (
    <div>
        <h5 onClick={() => {
          props.setVehicleFound(false);
        }}
        className="p-1 text-center w-full absolute top-0 "><i className=" text-3xl ri-arrow-down-wide-line"></i>
      </h5> 
      <h2 className="text-2xl font-semibold mt-5 mb-5">Looking for Driver</h2>
     <div className='flex gap-4 flex-col justify-between items-center'>
     <img className='h-20' src="../assets/car1.png" alt="" />
     <div className='w-full flex flex-col gap-4'>
      <div className='flex  items-center gap-5 p-2 border-b-2 border-gray-200'>
      <i class="ri-map-pin-line"></i>
      <div>
        <h3 className='text-lg font-medium'>12112</h3>
        <p className='text-gray-600'>Tower 7, BLock D2 Crossing Republik</p>
      </div>
      </div>
      <div className='flex  items-center gap-5  p-2 border-b-2 border-gray-200 '>
      <i class="ri-map-pin-line"></i>
      <div>
        <h3 className='text-lg font-medium'>12112</h3>
        <p className='text-gray-600'>Tower 7, BLock D2 Crossing Republik</p>
      </div>
      </div>
      <div className='flex  items-center gap-5  p-2 border-b-2 border-gray-200'>
      <i class="ri-money-rupee-circle-fill"></i>  
        <div>
        <h3 className='text-lg font-medium'>Rs. 465</h3>
        <p className='text-gray-900 text-lg'>Cash</p>
      </div>
      </div>
     </div>
    
     </div>

    </div>
  )
}

export default LookingForDriver