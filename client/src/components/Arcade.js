import ArcadeGames from "./ArcadeGames";
import LogIn from "./Login";

function Arcade({ user, setUser }) {
  return (
    <div>
      {!user ? (
        <LogIn setUser={setUser} />
      ) : (
        <ArcadeGames user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default Arcade;
