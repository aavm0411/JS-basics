//Stateless Functional Component
// This component create the navigation bar and displays the number of counters that are larger than 0
// The state is coming from App.js

const NavBar = ({ totalCounters }) => {
  return (
    //   For more information about this section look at the "bootstrap" documentation
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#!">
        {/* href needs the "!" to signal a placeholder  */}
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
