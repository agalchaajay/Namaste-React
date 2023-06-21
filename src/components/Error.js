import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="contact-container">
      <h1>Oops..</h1>
      <h3>Something went wrong.</h3>
      <h3>{err?.error?.message}</h3>
    </div>
  );
};

export default Error;
