import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
function Navbar() {
  return (
    <div>
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="20"
                height="35"
                role="img"
                aria-label="Bootstrap"
              >
                {" "}
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link to={"/CoursesPage"}>
                <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    EXPLORE 
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Subjects</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Goals
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      More
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
              <li>
              <Link to={"/OnlineProjects"}><a href="#" class="nav-link px-3 text-white">
                Online Projects
                </a></Link>
              </li>
              <li>
                <a href="#" class="nav-link px-3 text-white">
                  Find new Career
                </a>
              </li>
              <li>
                <Link to={"/CodePage"}>
                  <a href="#" class="nav-link px-3 text-white">
                    Code
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" class="nav-link px-3 text-white">
                  About us
                </a>
              </li>
            </ul>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </form>
            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
              <Link to={"/Spage"}>

              <button type="button" class="btn btn-warning">
                Join for free
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
