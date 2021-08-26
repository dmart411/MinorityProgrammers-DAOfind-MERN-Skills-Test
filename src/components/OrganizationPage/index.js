import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDaos } from "../../actions";

const OrganizationPage = ({ match, fetchDaos, dao }) => {
  useEffect(() => {
    fetchDaos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    return (
      <>
        <div className="content">
          <Link
            to={`/edit-dao/${match.params.id}`}
            className="ui right floated inverted blue button"
          >
            Edit
          </Link>
          <div className="header">{dao.name}</div>
          <div className="meta">{`Founded on ${dao.foundDate}`}</div>
          <div className="description">
            <div className="ui horizontal statistics">
              <div className="statistic">
                <div className="value">
                  ${parseInt(dao.aum).toLocaleString()}
                </div>
                <div className="label">AUM (USD)</div>
              </div>
              <div className="statistic">
                <div className="value">
                  {parseInt(dao.twl).toLocaleString()}
                </div>
                <div className="label">Total TWL</div>
              </div>
              <div className="statistic">
                <div className="value">{dao.category}</div>
                <div className="label">Category</div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <img className="ui avatar image" src={dao.img} alt="logo" />
            {dao.name}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <div className="ui card fluid">
        {dao ? renderContent() : <div className="ui loader" />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ daos }, ownProps) => {
  return {
    dao: daos.filter((dao) => dao.id === ownProps.match.params.id).pop(),
  };
};

export default connect(mapStateToProps, { fetchDaos })(OrganizationPage);
