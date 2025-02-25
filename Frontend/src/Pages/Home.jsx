import React from "react"; 
import {useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePannelWork from "../Components/VehiclePannelWork";
import ConfirmedRide from "../Components/ConfirmedRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

function Home() {
 
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [pannelOpen, setpannelOpen] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
  };
const [VehiclePannel, setVehiclePannel] = useState(false)
const [ConfirmedRidePannel, setConfirmedRidePannel] = useState(false)
const [VehicleFound, setVehicleFound] = useState(false)
const [WaitingForDriverPanel, setWaitingForDriverPanel] = useState(false)
const panel = useRef(null)
const pannelClose=useRef(null)
const vehiclePannelRef=useRef(null)
const ConfirmedPannelRef=useRef(null)
const VehicleFoundRef=useRef(null)
const WaitingForDriverRef=useRef(null)
useGSAP(()=>{
  if(pannelOpen){
    gsap.to(panel.current,{
      height:'70vh',
      padding:24,
      // opacity:1
    })
    gsap.to(pannelClose.current,{
     opacity:1
    })

  }else{
    gsap.to(panel.current,{
      height:'0vh',
      padding:0
      // opacity:0
    })
    gsap.to(pannelClose.current,{
      opacity:0
     })
  }
},[pannelOpen])

useGSAP(()=>{
  if(VehiclePannel){
    gsap.to(vehiclePannelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehiclePannelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[VehiclePannel])
 
useGSAP(()=>{
  if(ConfirmedRidePannel){
    gsap.to(ConfirmedPannelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(ConfirmedPannelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[ConfirmedRidePannel])


useGSAP(()=>{
  if(VehicleFound){
    gsap.to(VehicleFoundRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(VehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
},[VehicleFound])


useGSAP(()=>{
  if(WaitingForDriverPanel){
    gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
},[WaitingForDriverPanel])


  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
      />
      <div onClick={()=>{
        setVehiclePannel(true)
      }} className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="..\assets\map.png"
          alt=""
        />
      </div>
      <div className="flex flex-col  justify-end h-screen absolute top-0 w-full">
      <div className="h-[30%] p-6 relative bottom-0 left-0 w-full bg-white">
      <h5 onClick={()=>setpannelOpen(false)} ref={pannelClose} className="absolute opacity-0 right-6 top-6">
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full "></div>
            <input
            value={pickup}
            onChange={(e)=>{
                setpickup(e.target.value)
            }}  
            onClick={()=>{
              setpannelOpen(true)
            }}
              className="bg-[#eee] px-12 py-2 text-base  mt-5 mb-2 rounded-lg w-full"
              type="text"
              placeholder="Add a Pickup Location"
            />
            <input
              value={destination}
              onClick={()=>{
                setpannelOpen(true)
              }}
              onChange={(e)=>{
                  setdestination(e.target.value)
              }}  
              className="bg-[#eee] px-12 py-2 text-base w-full rounded-lg"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>
        <div ref={panel} className=" bg-white h-0  ">
              <LocationSearchPanel VehiclePannel={VehiclePannel} setVehiclePannel={setVehiclePannel} />
        </div>
      </div>
      <div ref={vehiclePannelRef} className="fixed w-full z-10 translate-y-full px-3 py-10 bg-white  bottom-0" >
      <VehiclePannelWork setConfirmedRidePannel={setConfirmedRidePannel} setVehiclePannel={setVehiclePannel} />
      </div>
      <div ref={ConfirmedPannelRef} className="fixed w-full z-10 translate-y-full px-3 py-6 pt-10 bg-white  bottom-0" >
      <ConfirmedRide  setConfirmedRidePannel={setConfirmedRidePannel} setVehicleFound={setVehicleFound} />
      </div>
      <div  ref={VehicleFoundRef} className="fixed w-full z-10 translate-y-full px-3 py-6 pt-10 bg-white  bottom-0" >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div  ref={WaitingForDriverRef} className="fixed w-full z-10 translate-y-full px-3 py-6 pt-10 bg-white  bottom-0" >
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
      

    </div>
  );
}

export default Home;
