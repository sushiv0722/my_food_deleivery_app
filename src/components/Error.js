import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OooppSSS !!! {err.data} </h1>
      <h1>
        Status : {err.status} {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
