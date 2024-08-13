function ChartsNavbar({ onClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body">
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <button className="nav-link" onClick={() => onClick('WEEK')}>WEEK</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => onClick('MONTH')}>MONTH</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => onClick('QUARTER')}>QUARTER</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => onClick('YEAR')}>YEAR</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ChartsNavbar;