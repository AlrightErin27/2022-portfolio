function ArcadeGames({ user, setUser }) {
  function handleLogOut() {
    setUser();
  }

  return (
    <div>
      ArcadeGames<button onClick={handleLogOut}>Log Off</button>
    </div>
  );
}

export default ArcadeGames;
