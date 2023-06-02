import "../App.css";

const lastPageStyles = {
  container: {
    margin: "auto",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    minHeight: "60vh",
    justifyContent: "center",
    gap: "25px",
  },
  bottomArea: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  footer: {
    textAlign: "center",
  },
};

const heading = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "3rem",
  },
  underline: {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
};

const LastPage = () => {
  return (
    <div style={heading.heading}>
      <div style={lastPageStyles.container}>
        <h4>
          Table 1, showing Immediate memory span of the subject for digits
          presented in forward and backward manner."Changes Made"
        </h4>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>
                Immediate memory span of the subject for Digits
              </th>
            </tr>
            <tr>
              <th>Forward Series</th>
              <th>Backward Series</th>
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
          <p style={heading.underline}>
            Compare your results for forward and backward series and mention the
            possible reasons for the differences in the results.
          </p>
          <p style={heading.underline}>
            Examine and discuss your results in the light of the concept of{" "}
            <b>Primacy and Recency effect</b>.
          </p>
          <h4>Conclusion:</h4>
          <p style={heading.underline}>
            The phenomena of Immediate memory span for digits was demonstrated
            to find the order of the effect and check the superiority of forward
            and backward series.
          </p>
          <h4>Practical Application:</h4>
          <p style={heading.underline}>
            Mention 2 situations which reflect the importance of Immediate
            memory span.
          </p>
          <footer>
            <h5 style={lastPageStyles.footer}>
              .....*End of the Experiment*.....
            </h5>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
