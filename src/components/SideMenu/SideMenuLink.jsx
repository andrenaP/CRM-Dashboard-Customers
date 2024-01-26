import './SideMenu.styles.css';
import {Chevron_right} from "img/icons"
import React from 'react'
import {useState} from 'react';

export const SideMenuLink = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  var calasName="SideMenu__Ul__Li__Link"
   var color="#9197B3"
   const Icon=props.icon
  if ((props.Setactive || isHovering) && !(props.Setactive && isHovering)){
    calasName+=" active"
    color="white"
  }
    return (
      <li className="SideMenu__Ul__Li"  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href={props.link} className={calasName}>
          <div className="SideMenu__Ul__Li__Link__Text">
            <div className="SideMenu__Ul__Li__Link__Svg">
              <Icon color={color} />
            </div>
            <span className="SideMenu__Ul__Li__Link__Text__Name">
              {props.Name}
            </span>
          </div>
          <Chevron_right className="SideMenu__Ul__Li__Link__Chevron_right" color={color} />
        </a>
      </li>
    );
  };
  