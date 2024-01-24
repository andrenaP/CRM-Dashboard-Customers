import './SideMenu.styles.css';
import {Chevron_right} from "img/icons"
export const SideMenuLink = (props) => {
  const Icon=props.Icon
  console.log(Icon)
    return (<li className='SideMenu__Ul__Li'>
      <a href={props.link} className='SideMenu__Ul__Li__Link'>
        <div className='SideMenu__Ul__Li__Link__Text'>
        {props.children}
        <span className='SideMenu__Ul__Li__Link__Text__Name'>{props.Name}</span>
        </div>
        <Chevron_right className="SideMenu__Ul__Li__Link__Chevron_right"/>
      </a>
      </li>

    );
  };
  