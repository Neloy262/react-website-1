import React from "react";

function Card(props) {
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center ">
        <div className="overflow-hidden">
          <img
            src={props.data.img1}
            alt="not found"
            className="rounded-t-xl hover:scale-[1.2] transition-all ease-linear duration-500"
            style={{ height: props.height, width: props.width }}
          />
        </div>
        <div
          className={
            "absolute left-6  border-1  text-white bg-blue-500 " +
            props.data.perc
          }
        >
          <h6 className="p-2">{props.data.tag}</h6>
        </div>
        <div
          className="p-6 rounded-b-xl shadow-2xl"
          style={{ width: props.width }}
        >
          <h3 className="">{props.data.text}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
