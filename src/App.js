import "./App.css";

function App() {
  return (
    <>
      <header className="shadow py-3 px-2 mb-5">
        <nav className=" d-flex justify-content-between align-items-center">
          <div className="brandname fs-5">Company name</div>
          <ul className="d-flex justify-content-center align-items-center">
            <li>
              <a href="features">Features</a>
            </li>
            <li>
              <a href="Enterprise">Enterprise</a>
            </li>
            <li>
              <a href="Support">Support</a>
            </li>
            <li>
              <a href="prising">Pricing</a>
            </li>
            <li>
              <a href="signin" className="btn btn-outline-primary">
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <div className="container">
          <div className="display-3 mb-1 text-center">Pricing</div>
          <p className="text-center display-6 hero-text mb-4">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card shadow text-center mb-4">
                <div className="card-head bg-light border-bottom fs-2">
                  Free
                </div>
                <div className="card-body p-4">
                  <h1 className="text-secondary mb-3">
                    <span className="text-dark display-5 fw-bold">$0</span> / mo
                  </h1>
                  <p>10 Users includes</p>
                  <p>2ggb of storage</p>
                  <p>Email subbort</p>
                  <p>Help center access</p>
                  <a
                    href="sign"
                    className="mt-4 fs-5 p-2 w-100 btn btn-outline-primary"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card shadow text-center mb-4">
                <div className="card-head bg-light border-bottom fs-2">Pro</div>
                <div className="card-body p-4">
                  <h1 className="text-secondary mb-3">
                    <span className="text-dark display-5 fw-bold">$15</span> /
                    mo
                  </h1>
                  <p>20 users included</p>
                  <p>10gb of storage</p>
                  <p>Priority email support</p>
                  <p>Help center access</p>
                  <a
                    href="sign"
                    className="mt-4 fs-5 p-2 w-100 btn btn-primary"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card shadow text-center mb-4">
                <div className="card-head bg-light border-bottom fs-2">
                  Enterprise
                </div>
                <div className="card-body p-4">
                  <h1 className="text-secondary mb-3">
                    <span className="text-dark display-5 fw-bold">$29</span> /
                    mo
                  </h1>
                  <p>30 Users includes</p>
                  <p>15gb of storage</p>
                  <p>Phone and email subbort</p>
                  <p>Help center access</p>
                  <a
                    href="sign"
                    className="mt-4 fs-5 p-2 w-100 btn btn-primary"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <hr className="mt-4 mb-4"></hr>

          <div className="row pt-4">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <img
                width={"25"}
                height={"25"}
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt="img"
              ></img>
              <p className="mt-2 text-secondary">© 2017-2018</p>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <ul>
                <li>
                  <b className="fs-5">Features</b>
                </li>
                <li>
                  <a href="features">Cool stuff</a>
                </li>
                <li>
                  <a href="features">Random feature</a>
                </li>
                <li>
                  <a href="features">Tema feature</a>
                </li>
                <li>
                  <a href="features">Stuff for developers</a>
                </li>
                <li>
                  <a href="features">Another one</a>
                </li>
                <li>
                  <a href="features">Last time</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <ul>
                <li>
                  <b className="fs-5">Resources</b>
                </li>
                <li>
                  <a href="features">Resourse</a>
                </li>
                <li>
                  <a href="features">Resourse name</a>
                </li>
                <li>
                  <a href="features">Another resourse</a>
                </li>
                <li>
                  <a href="features">Final resourse</a>
                </li>
              </ul>
            </div>{" "}
            <div className=" col-sm-6 col-md-6 col-lg-3">
              <ul>
                <li>
                  <b className="fs-5">About</b>
                </li>
                <li>
                  <a href="features">Team</a>
                </li>
                <li>
                  <a href="features">Locations</a>
                </li>
                <li>
                  <a href="features">Privacy</a>
                </li>
                <li>
                  <a href="features">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
