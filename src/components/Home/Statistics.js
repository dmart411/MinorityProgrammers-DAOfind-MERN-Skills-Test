import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Statistics = ({ daos }) => {
  const [totalAUM, setTotalAUM] = useState(0);
  const [totalDAOs, setTotalDAOs] = useState(0);

  useEffect(() => {
    setTotalDAOs(daos.length);
    let total = 0;
    daos.map((dao) => {
      return dao.aum !== "N/A" ? (total += parseInt(dao.aum)) : null;
    });
    setTotalAUM(total);
  }, [daos]);

  return (
    <div className="ui horizontal blue statistics">
      <div className="statistic">
        <div className="value">{totalDAOs}</div>
        <div className="label">Number of DAOs</div>
      </div>
      <div className="statistic">
        <div className="value">${totalAUM.toLocaleString()}</div>
        <div className="label">Total AUM (USD)</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    daos: state.daos,
  };
};

export default connect(mapStateToProps)(Statistics);
