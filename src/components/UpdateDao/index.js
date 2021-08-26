import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchDao, updateDao } from "../../actions";

const UpdateDao = ({ match, fetchDao, updateDao, dao }) => {
  useEffect(() => {
    fetchDao(match.params.id);
  }, []);

  let history = useHistory();
  const [name, setName] = useState(dao.name);
  const [category, setCategory] = useState(dao.category);
  const [date, setDate] = useState(dao.foundDate);
  const [aum, setAum] = useState(parseInt(dao.aum));
  const [twl, setTwl] = useState(parseInt(dao.twl));

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
    const newDao = {
      id: dao.id,
      name,
      category,
      aum,
      twl,
      foundDate: date,
    };
    updateDao(newDao);
    setName("");
    setCategory("");
    setDate("");
    setAum(0);
    setTwl(0);
    history.push("/");
  };

  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <h1 className="ui dividing header">Edit a DAO</h1>
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

const mapStateToProps = ({ daos }, ownProps) => {
  return {
    dao: daos.filter((dao) => dao.id === ownProps.match.params.id).pop(),
  };
};

export default connect(mapStateToProps, { updateDao, fetchDao })(UpdateDao);
