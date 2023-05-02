import "../App.css";

const lastPageStyles = {
  container: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    minHeight: "70vh",
    justifyContent: "space-between",
    gap: "24px",
  },
  bottomArea: {
    display: "flex",
    flexDirection: "column",
    gap: "52px",
  },
  footer: {
    textAlign: "center",
  },
};

const LastPage = () => {
  return (
    <div style={lastPageStyles.container}>
      <h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, quas!
      </h4>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>No. of correct responses</th>
          </tr>
          <tr>
            <th>Recall </th>
            <th>Recognition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div style={lastPageStyles.bottomArea}>
        <h4>Discussion:</h4>
        <h4>Conclusion:</h4>
        <h4>Practical Application:</h4>
        <footer>
          <h5 style={lastPageStyles.footer}>.....*End Experiment*.....</h5>
        </footer>
      </div>
    </div>
  );
};

export default LastPage;
