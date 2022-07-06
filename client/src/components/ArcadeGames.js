function ArcadeGames({ user, setUser }) {
  function handleLogOut() {
    setUser();
  }

  return (
    <div>
      <h2>Game 1</h2>
      <h2>Game 2</h2>
      <button onClick={handleLogOut}>Log Off</button>
    </div>
  );
}

export default ArcadeGames;
