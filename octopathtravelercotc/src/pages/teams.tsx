// pages/teams.tsx
import NavBar from '../../components/NavBar';

const Teams = () => {
  return (
    <div>
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Teams Page</h1>
        <p>
          Welcome to the Teams page! This is where you can find information about different teams in the game.
        </p>
      </div>
    </div>
  );
};

export default Teams;
