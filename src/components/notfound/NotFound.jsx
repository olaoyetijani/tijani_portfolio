import { Link } from "react-router-dom";
import "./notfound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="notfound-button">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
