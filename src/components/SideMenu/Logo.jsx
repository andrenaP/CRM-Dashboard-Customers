import image from "img/setting 1.svg"
import {LogoSvg} from "img/icons"
import './SideMenu.styles.css';

export const Logo = () => {
    return (
      <a className="SideMenu__Logo" href="/">
        {/* <img
        className="SideMenu__Logo__Svg"
        src={image}
        alt="Logo image"
        height="37px"
        width="37px" /> */}
        <LogoSvg className="SideMenu__Logo__Svg"/>
        <div className="SideMenu__Logo__Text">
        <h1 className="SideMenu__Logo__Header">Dashboard</h1>
        <span className="SideMenu__Logo__Span">v.01</span>
        </div>
      </a>
    );
  };
  