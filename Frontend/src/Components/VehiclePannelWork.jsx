import React from "react";

function VehiclePannelWork(props) {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePannel(false);
        }}
        className="p-1 text-center w-full absolute top-0 "
      >
        {" "}
        <i className=" text-3xl ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mt-5 mb-5">Choose a Vehicle</h2>
      <div
        onClick={() => {
          props.setConfirmedRidePannel(true);
        }}
        className="flex p-3 active:border-black border-2 border-gray-200 mb-2  rounded-xl w-full items-center justify-between"
      >
        <img className="h-15" src="../assets/car1.png" alt="" />
        <div onClick={()=>{
          props.setConfirmedRidePannel(true)
        }} className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i class="ri-user-line"></i>
            </span>{" "}
            4{" "}
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className=" text-gray-600 font-normal text-xs">
            affordable,compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs. 293</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmedRidePannel(true);
        }}
        className="flex p-3 active:border-black border-2 border-gray-200 mb-2  rounded-xl w-full items-center justify-between"
      >
        <img
          className="h-13"
          src="https://imgs.search.brave.com/vfiQZnBQ2CuQva5CjWwLppj2yn8TfrQHTfbujrMkBkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8y/Y2Q0M2JfNDczODBm/OWFlNjNhNGZhOWJm/NTVhMWJlOTMzNDUw/YmR-bXYyLnBuZy92/MS9maWxsL3dfNDY2/LGhfMzIxLHFfOTAv/MmNkNDNiXzQ3Mzgw/ZjlhZTYzYTRmYTli/ZjU1YTFiZTkzMzQ1/MGJkfm12Mi5wbmc"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            SUV{" "}
            <span className="ml-4">
              <i class="ri-user-line"></i>
            </span>{" "}
            6{" "}
          </h4>
          <h5 className="font-medium text-sm">10 mins away</h5>
          <p className=" text-gray-600 font-normal text-xs">
            affordable,compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs. 493</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmedRidePannel(true);
        }}
        className="flex p-3 active:border-black border-2 border-gray-200 mb-2  rounded-xl w-full items-center justify-between"
      >
        <img
          className="h-13"
          src="https://imgs.search.brave.com/40FGlGGrVsV1kexsDUY_gO-7wL7vzMwH4CDHRcCHzWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9BdXRv/LVJpY2tzaGF3LVBO/Ry1QaG90by5wbmc"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Auto{" "}
            <span>
              <i class="ri-user-line"></i>
            </span>{" "}
            3{" "}
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className=" text-gray-600 font-normal text-xs">
            affordable,compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs. 93</h2>
      </div>
    </div>
  );
}

export default VehiclePannelWork;
