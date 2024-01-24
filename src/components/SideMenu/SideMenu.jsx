import {Logo} from "components/SideMenu/Logo"
import './SideMenu.styles.css';
import {Profile} from "./Profile"
import {SideMenuLink} from "./SideMenuLink"
import {Dashboard,Product,Customers,Income,Promote,Help,LogoSvg} from "img/icons"
export const SideMenu = () => {
    return (
      <div className="SideMenu">
        <Logo/>
      <ul className="SideMenu__Ul">
        <SideMenuLink  Name="Dashboard" link="/12"> <Dashboard className="SideMenu__Ul__Li__Link__Svg"/> </SideMenuLink>
        <SideMenuLink Name="Product" link="/23">  <Product className="SideMenu__Ul__Li__Link__Svg" /> </SideMenuLink>
        <SideMenuLink Name="Customers" link="/23">  <Customers className="SideMenu__Ul__Li__Link__Svg" /> </SideMenuLink>
        <SideMenuLink Name="Income" link="/23">  <Income className="SideMenu__Ul__Li__Link__Svg" /> </SideMenuLink>
        <SideMenuLink Name="Promote" link="/23">  <Promote className="SideMenu__Ul__Li__Link__Svg" /> </SideMenuLink>
        <SideMenuLink Name="Help" link="/23">  <Help className="SideMenu__Ul__Li__Link__Svg" /> </SideMenuLink>
      </ul>
      <Profile/>
      </div>
    );
  };
  