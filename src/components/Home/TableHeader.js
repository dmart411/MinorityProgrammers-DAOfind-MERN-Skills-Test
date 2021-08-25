import { useState } from "react";
import { connect } from "react-redux";
import { filterDaos } from "../../actions";

const TableHeader = ({ label, property, filterDaos }) => {
  const [ascending, setAscending] = useState(true);
  return (
    <th
      onClick={() => {
        setAscending(!ascending);
        filterDaos(property, ascending);
      }}
    >
      {label}
      {!ascending ? (
        <i className="caret up icon"></i>
      ) : (
        <i className="caret down icon"></i>
      )}
    </th>
  );
};

export default connect(null, { filterDaos })(TableHeader);
