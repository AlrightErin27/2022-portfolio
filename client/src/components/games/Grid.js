import React from "react";

function Grid({ birds, onSight }) {
  function handleClick(e) {
    // console.log(e.target.alt);
    onSight(e.target.alt);
  }

  const renderGrid = birds.map((bird, idx) => {
    return (
      <div className="square" key={idx} onClick={(e) => handleClick(e)}>
        <img src={bird.img} alt={bird.name} className="bird-img" />
      </div>
    );
  });

  return (
    <>
      <div className="grid">{renderGrid}</div>
    </>
  );
}

export default Grid;
