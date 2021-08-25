import Leaderboard from "./Leaderboard";
import Search from "./Search";
import Statistics from "./Statistics";

const Home = ({ daos }) => {
  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <h1>DAO Find</h1>
      <Statistics />
      <Search />
      <Leaderboard />
    </div>
  );
};

export default Home;
