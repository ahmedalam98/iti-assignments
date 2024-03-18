import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" href="/">
          Next.js Lab 1
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <div className="my-divider">
              <div className="divider-one">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="/home/firstNested"
                  >
                    First
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="/home/secondNested"
                  >
                    Second
                  </Link>
                </li>
              </div>

              <div className="divider-two">
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/products">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" href="/docs">
                    Catch All
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
