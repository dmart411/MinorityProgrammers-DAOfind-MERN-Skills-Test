import { connect } from "react-redux";
import { addDao } from "../actions";

const AddDao = (props) => {
  return (
    <button
      onClick={() => {
        props.addDao({ hello: "world" });
      }}
    >
      add
    </button>
  );
};

export default connect(null, { addDao })(AddDao);
