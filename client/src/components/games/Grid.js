function Grid({ birds, onSight }) {
  function handleSelectBird(e) {
    onSight(e.target.alt);
  }

  return (
    <div className="grid">
      <div className="square" key={0}>
        <img
          src={birds[0].img}
          alt={birds[0].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={1}>
        <img
          src={birds[1].img}
          alt={birds[1].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={2}>
        <img
          src={birds[2].img}
          alt={birds[2].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={3}>
        <img
          src={birds[3].img}
          alt={birds[3].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={4}>
        <img
          src={birds[4].img}
          alt={birds[4].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={5}>
        <img
          src={birds[5].img}
          alt={birds[5].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={6}>
        <img
          src={birds[6].img}
          alt={birds[6].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
      <div className="square" key={7}>
        <img
          src={birds[7].img}
          alt={birds[7].name}
          className="bird-img"
          onClick={handleSelectBird}
        />
      </div>
    </div>
  );
}

export default Grid;
