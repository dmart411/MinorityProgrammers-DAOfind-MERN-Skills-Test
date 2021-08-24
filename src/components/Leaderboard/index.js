import { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Image, Container } from "react-bootstrap";
import { fetchDaos } from "../../actions";

const Leaderboard = ({ daos, fetchDaos }) => {
  useEffect(() => {
    fetchDaos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>DAO Leaderboards</h1>
      <Table responsive size="sm" bordered hover style={{ minWidth: "500px" }}>
        <thead>
          <tr>
            <th>DAO</th>
            <th>Category</th>
            <th>AUM</th>
            <th>TWL</th>
            <th>Date founded</th>
          </tr>
        </thead>
        <tbody>
          {daos
            ? daos.map((dao) => {
                return (
                  <tr key={dao.id}>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <div style={{ display: "inline-block" }}>
                        <Image
                          src={dao.img}
                          width="40"
                          height="40"
                          thumbnail
                          style={{ marginRight: "5px" }}
                        />
                        <div
                          style={{
                            fontSize: "15px",
                            display: "inline-block",
                          }}
                        >
                          {dao.name}
                        </div>
                      </div>
                    </td>
                    <td>{dao.category}</td>
                    <td>{`$${dao.aum}`}</td>
                    <td>{dao.twl}</td>
                    <td>{dao.foundDate}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = ({ daos }) => {
  return {
    daos,
  };
};

export default connect(mapStateToProps, { fetchDaos })(Leaderboard);
