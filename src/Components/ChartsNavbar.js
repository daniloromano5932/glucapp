import Button from "./Button.tsx";

function ChartsNavbar({ onClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body">
      <div className="container-fluid">
        <Button
          data-mdb-collapse-init={true}
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          as="button"
        >
          <i className="fas fa-bars"></i>
        </Button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-12">
            <li className="nav-item active">
              <Button as="button" className="nav-link" text="WEEK" onClick={() => onClick('WEEK')}/>
            </li>
            <li className="nav-item">
              <Button as="button" className="nav-link" text="MONTH" onClick={() => onClick('MONTH')}/>
            </li>
            <li className="nav-item">
              <Button as="button" className="nav-link" text="QUARTER" onClick={() => onClick('QUARTER')}/>
            </li>
            <li className="nav-item">
              <Button as="button" className="nav-link" text="YEAR" onClick={() => onClick('YEAR')}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ChartsNavbar;