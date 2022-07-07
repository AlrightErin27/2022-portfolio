import Bird from "./Bird";

function Grid({ birds, onSight }) {
  function handleSelectBird(e) {
    // console.log(e.target.alt);
    onSight(e.target.alt);
  }

  const renderGrid = birds.map(({ speed, delay, img, name }, idx) => {
    return (
      <Bird
        speed={speed}
        delay={delay}
        img={img}
        name={name}
        className="square"
        key={idx}
        handleSelectBird={handleSelectBird}
      />
    );
  });

  return (
    <>
      <div className="grid">{renderGrid}</div>
    </>
  );
}

export default Grid;
