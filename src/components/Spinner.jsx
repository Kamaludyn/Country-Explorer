import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
  display: "block",
  height: "75vh",
  margin: "0 auto",
  paddingTop: "10%",
  paddingLeft: "50%",
};

const Spinner = ({ loading }) => {
  return (
    <ScaleLoader
      color="#088178"
      loading={loading}
      cssOverride={override}
      height={150}
      width={6}
      size={100}
      className="bg-lightBg dark:bg-darkBg w-full h-full absolute border-fuchsia-500"
    />
  );
};

export default Spinner;
