import Logo from "../assets/logo.png";
function Navigation() {
  return (
    <div className="nav-page">
      <div className="nav-bar">
        <h1 className="logo">
          <img src={Logo} alt="logo" />
        </h1>
        <ul className="desk-nav">
          <li><a href="#">home</a></li>
          <li><a href="#">about us</a></li>
          <li><a href="#">academics</a></li>
          <li><a href="#">admission</a></li>
          <li><a href="#">news and events</a></li>
          <li><a href="#">international office</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;
