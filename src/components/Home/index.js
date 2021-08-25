import Leaderboard from "./Leaderboard";
import Search from "./Search";
import Statistics from "./Statistics";

const Home = ({ daos }) => {
  return (
    <div className="ui container">
      <Statistics />
      <Search />
      <Leaderboard />
    </div>
  );
};

export default Home;
