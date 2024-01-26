import {Logo} from "components/SideMenu/Logo"
import './SideMenu.styles.css';
import {Profile} from "./Profile"
import {SideMenuLink} from "./SideMenuLink"
import {Dashboard,Product,Customers,Income,Promote,Help,LogoSvg} from "img/icons"
// const color="#9197B3"
const color="white"



export const SideMenu = () => {
    return (
      <section className="SideMenu">
        <Logo/>
      <ul className="SideMenu__Ul" >
        <SideMenuLink  Name="Dashboard" link="/12" icon={Dashboard} /> 
        <SideMenuLink Name="Product" link="/23"  icon={Product}/> 
        <SideMenuLink Name="Customers" link="/23" Setactive="active"  icon={Customers}/>  
        <SideMenuLink Name="Income" link="/23"  icon={Income}/>  
        <SideMenuLink Name="Promote" link="/23"  icon={Promote}/> 
        <SideMenuLink Name="Help" link="/23"  icon={Help}/>  
      </ul>
      <Profile/>
      </section>
    );
  };
  