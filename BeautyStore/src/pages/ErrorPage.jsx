import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops</h1>
      <p>Something went wrong.</p>

      <p>{error?.statusText || error?.message}</p>

      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
