import { useState } from "react";
import { connect } from "react-redux";
import { filterDaos } from "../../actions";

const TableHeader = ({ label, property, setFilter, filterDaos }) => {
  const [ascending, setAscending] = useState(true);
  return (
    <th
      onClick={() => {
        setAscending(!ascending);
        filterDaos(property, ascending);
      }}
    >
      {label}
      {ascending ? (
        <i className="fas fa-arrow-up" style={{ marginLeft: "20px" }}></i>
      ) : (
        <i className="fas fa-arrow-down" style={{ marginLeft: "20px" }}></i>
      )}
    </th>
  );
};

export default connect(null, { filterDaos })(TableHeader);
