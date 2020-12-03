import React from "react";
import {Link} from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <div className="h1 text-center">Google Books</div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              type="button"
              className="nav-link active btn btn-link border border-primary ml-2 mr-2"
              to="/saved"
            >
              Saved Books
            </Link>
          </li>
          <li className="nav-item">
            <Link
              type="button"
              className="nav-link active btn btn-link border border-primary ml-2 mr-2"
              to="/search"
            >
              Search for Books
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}