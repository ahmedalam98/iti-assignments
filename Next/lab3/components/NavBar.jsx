import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
export default function NavBar() {
  const { data: session } = useSession();
  console.log(session);
  if (session)
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-primary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Next JS Lab 3
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/posts">
                    posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-disabled="true"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => signOut()}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  else {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Next JS Lab 3
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/posts">
                    posts
                  </Link>
                </li>

                <li className="nav-item">
                  <button className="nav-link" onClick={() => signIn()}>
                    sign In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
