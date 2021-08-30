import React, { useEffect } from "react";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="not-found-page">
      <div>
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </div>
    </div>
  );
};

export default NotFound;
