import React from 'react'

function LocationSearchPanel(props) {

  const locations=[
    "12112,Tower 7 Block D2 ,Crossing Republik, Ghaziabad",
    "11113,Tower 2 Block D2 ,Crossing Republik, Ghaziabad",
    "10012,Tower 1 Block D1 ,Crossing Republik, Ghaziabad",
    "13412,Tower 3 Block D5 ,Crossing Republik, Ghaziabad",
  ]
  return (
    <div className='flex flex-col gap-y-3 justify-start mt-1'>
      {
        locations.map((location,idx)=>(
            <div key={idx} onClick={()=>{
              props.setVehiclePannel(true)
            }} className='flex items-start border-2 active:border-black border-gray-100 px-3 py-4 rounded-lg justify-start gap-x-3'>
            <h2 className='bg-[#eee] flex items-center justify-center h-10 w-13 rounded-full'><i className="ri-map-pin-line "></i></h2>
            <h4 className='text-lg font-medium'>{location}</h4>
          </div>       
        ))
      }
      
     
     
    </div>
  )
}

export default LocationSearchPanel