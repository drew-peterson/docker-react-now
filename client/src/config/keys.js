export default () => {
  console.log("ENV:", process.env);
  let uri;
  if (process.env.REACT_APP_HOST_ENV === "stage") {
    uri = process.env.REACT_APP_GRAPHCOOL_STAGE_URI;
  } else {
    uri = process.env.REACT_APP_GRAPHCOOL_URI;
  }
  return {
    REACT_APP_HOST_ENV: process.env.REACT_APP_HOST_ENV,
    REACT_APP_GRAPHCOOL_URI: uri
  };
};
