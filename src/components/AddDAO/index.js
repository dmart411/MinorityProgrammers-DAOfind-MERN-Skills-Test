import { connect } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";
import { addDao } from "../../actions";

const AddDAO = ({ addDao }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [aum, setAum] = useState(0);
  const [twl, setTwl] = useState(0);

  const categoryOptions = [
    "Collector",
    "Grant",
    "Investment",
    "Media",
    "Platform",
    "Protocol",
    "Service",
    "Social",
  ];

  const onSubmit = () => {
    const newDao = { name, category, aum, twl, foundDate: date, img: "" };
    addDao(newDao);
    setName("");
    setCategory("");
    setDate("");
    setAum(0);
    setTwl(0);
    history.push("/");
  };

  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <h1 className="ui dividing header">Add a DAO</h1>
      <form className="ui equal width form" onSubmit={onSubmit}>
        <div className="fields">
          <div className="required field">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="required field">
            <label>Category</label>
            <select
              className="ui dropdown"
              placeholder="Select a Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="required field">
            <label>Date Founded</label>
            <input
              type="text"
              placeholder="Date Founded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="fields">
          <div className="required field">
            <label>TWL</label>
            <input
              type="number"
              placeholder="Enter TWL..."
              value={twl}
              onChange={(e) => setTwl(e.target.value)}
            />
          </div>
          <div className="required field">
            <label>AUM</label>
            <input
              type="number"
              placeholder="Enter AUM..."
              value={aum}
              onChange={(e) => setAum(e.target.value)}
            />
          </div>
        </div>
        <div className="ui inverted big primary button" onClick={onSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addDao })(AddDAO);
