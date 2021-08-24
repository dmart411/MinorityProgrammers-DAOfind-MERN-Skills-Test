import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDaos } from "../../actions";

const Leaderboard = (props) => {
  useEffect(() => {
    fetchDaos();
  });
  return (
    <div>
      {props.daos
        ? props.daos.map((dao) => {
            return <div>{dao.name}</div>;
          })
        : null}
    </div>
  );
};

const mapStateToProps = ({ daos }) => {
  return {
    daos,
  };
};

export default connect(mapStateToProps, { fetchDaos })(Leaderboard);
