import Birding from "./Birding/Birding";

function ArcadeGames({ user, setUser }) {
  function handleLogOut() {
    setUser();
  }

  return (
    <div>
      <Birding user={user} />
      <h2>Game 2</h2>
      <button onClick={handleLogOut}>Log Off</button>
    </div>
  );
}

export default ArcadeGames;
