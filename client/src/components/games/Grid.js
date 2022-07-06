import React from "react";

function Grid({ birds }) {
  function handleClick(e) {
    console.log(e.target.value);
  }

  const renderGrid = birds.map((bird, idx) => {
    return (
      <div
        className="square"
        id={idx}
        key={idx}
        onClick={(e) => handleClick(e)}
      >
        <img src={bird} alt="bird-img" className="bird-img" />
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
