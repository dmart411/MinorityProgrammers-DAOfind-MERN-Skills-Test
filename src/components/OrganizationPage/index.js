import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDaos } from "../../actions";

const OrganizationPage = ({ match, fetchDao, dao }) => {
  useEffect(() => {
    fetchDaos();
  });

  return (
    <div className="ui container">
      <h1>{dao ? dao.name : "loading"} </h1>
    </div>
  );
};

const mapStateToProps = ({ daos }, ownProps) => {
  return {
    dao: daos.filter((dao) => dao.id === ownProps.match.params.id).pop(),
  };
};

export default connect(mapStateToProps, { fetchDaos })(OrganizationPage);
