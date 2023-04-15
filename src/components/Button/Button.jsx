const styles = {
  button: {
    color: "#fff",
    backgroundColor: "#505050",
    borderRadius: "15px",
    fontSize: "20px",
    width: "94px",
    height: "48px",
  },
};

const Button = (props) => {
  const { label, handleClick } = props;
  return (
    <button onClick={handleClick} style={styles.button}>
      {label}
    </button>
  );
};

export default Button;
