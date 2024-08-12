
function ChartsNavbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body">
      <div class="container-fluid">
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <button class="nav-link">WEEK</button>
            </li>
            <li class="nav-item">
              <button class="nav-link">MONTH</button>
            </li>
            <li class="nav-item">
              <button class="nav-link">3 MONTHS</button>
            </li>
            <li class="nav-item">
              <button class="nav-link">YEAR</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ChartsNavbar;