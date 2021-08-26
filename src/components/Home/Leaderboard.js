import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDaos } from "../../actions";
import TableHeader from "./TableHeader";

const Leaderboard = ({ daos, fetchDaos }) => {
  const history = useHistory();

  useEffect(() => {
    fetchDaos();
  }, [fetchDaos]);

  return (
    <div className="ui container">
      <h1>DAO Leaderboard</h1>
      <table className="ui small inverted blue sortable celled table unstackable single line">
        <thead>
          <tr>
            <TableHeader label="DAO" property="name" />
            <TableHeader label="Category" property="category" />
            <TableHeader label="AUM" property="aum" />
            <TableHeader label="TWL" property="twl" />
            <TableHeader label="Date Founded" property="foundDate" />
          </tr>
        </thead>
        <tbody>
          {daos
            ? daos.map((dao) => {
                return (
                  <tr key={dao.id} onClick={()=>{history.push(`/dao/${dao.id}`)}}>
                    <td>
                        <img
                          src={dao.img}
                          width="35"
                          height="35"
                          style={{ marginRight: "5px", borderRadius: "30px" }}
                          alt="logo"
                        />

                        {dao.name}
                    </td>
                    <td>{dao.category}</td>
                    <td>{`$${
                      dao.aum !== "N/A" ? parseInt(dao.aum).toLocaleString() : 0
                    }`}</td>
                    <td>{parseInt(dao.twl).toLocaleString()}</td>
                    <td>{dao.foundDate}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ daos }) => {
  return {
    daos,
  };
};

export default connect(mapStateToProps, { fetchDaos })(Leaderboard);
