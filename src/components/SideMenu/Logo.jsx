import image from "img/setting 1.svg"
import './SideMenu.styles.css';

export const Logo = () => {
    return (
      <div className="SideMenu__Logo">
        <img
        className="SideMenu__Logo__Svg"
        src={image}
        alt="Logo image"
        height="37px"
        width="37px" />
        <div className="SideMenu__Logo__Text">
        <h1 className="SideMenu__Logo__Header">Dashboard</h1>
        <span className="SideMenu__Logo__Span">v.01</span>
        </div>
      </div>
    );
  };
  