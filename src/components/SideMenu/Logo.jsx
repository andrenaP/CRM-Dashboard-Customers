import {LogoSvg} from "img/icons"
import './SideMenu.styles.css';

export const Logo = () => {
    return (
      <a className="SideMenu__Logo" href="/">
        <LogoSvg className="SideMenu__Logo__Svg"/>
        <div className="SideMenu__Logo__Text">
        <h1 className="SideMenu__Logo__Header">Dashboard</h1>
        <span className="SideMenu__Logo__Span">v.01</span>
        </div>
      </a>
    );
  };
  