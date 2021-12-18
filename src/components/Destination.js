import React from "react";
import img1 from "../images/img-2.jpg";
import img2 from "../images/img-3.jpg";
import img3 from "../images/img-4.jpg";
import img4 from "../images/img-8.jpg";
import img5 from "../images/img-9.jpg";
import Card from "./Card";
function Destination() {
  const card1 = {
    img1: img2,
    tag: "Mystery",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    size: 0,
    perc: "bottom-[31.5%]",
  };
  const card2 = {
    height: "353px",
    width: "500px",
    img1: img1,
    tag: "Luxury",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    size: 1,
    perc: "bottom-[22.8%]",
  };

  const card3 = {
    img1: img3,
    tag: "Adventure",
    text: "Set Sail in the Atlantic Ocean and visiting Uncharted Waters",
    size: 0,
    perc: "bottom-[31.5%]",
  };

  const card4 = {
    img1: img4,
    tag: "Adrenaline",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    size: 0,
    perc: "bottom-[31.5%]",
  };

  const card5 = {
    img1: img5,
    tag: "Adventure",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    size: 1,
    perc: "bottom-[22.8%]",
  };
  return (
    <div className="flex flex-col justify-center items-center pb-20 bg-white">
      <h2 className="m-14">Check out these EPIC Destinations!</h2>

      <div className="flex gap-6 flex-col mb-10 xl:flex-row">
        <Card data={card5} width="500px" height="353px" />
        <Card data={card2} width="500px" height="353px" />
      </div>
      <div className="flex gap-6 flex-col mb-10 xl:flex-row">
        <Card
          data={card3}
          width={window.innerWidth >= 1280 ? "341px" : "500px"}
          height={window.innerWidth >= 1280 ? "228px" : "353px"}
        />
        <Card
          data={card4}
          width={window.innerWidth >= 1280 ? "341px" : "500px"}
          height={window.innerWidth >= 1280 ? "228px" : "353px"}
        />
        <Card
          data={card1}
          width={window.innerWidth >= 1280 ? "341px" : "500px"}
          height={window.innerWidth >= 1280 ? "228px" : "353px"}
        />
      </div>
    </div>
  );
}

export default Destination;
