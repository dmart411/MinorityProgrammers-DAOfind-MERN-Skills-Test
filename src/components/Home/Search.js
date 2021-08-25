import { useState } from "react";
import { connect } from "react-redux";
import { searchDaos } from "../../actions";

const Search = ({ searchDaos }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
    searchDaos(e.target.value);
  };
  return (
    <div
      className="ui form"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="field">
        <input
          type="text"
          placeholder="Search for DAOs..."
          value={text}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default connect(null, { searchDaos })(Search);
