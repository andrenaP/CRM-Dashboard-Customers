import './SideMenu.styles.css';
import image from "img/ManImage.png"

export const Profile = () => {
    return (
      <div className="SideMenu__Profile">
        <img
        className="SideMenu__Profile__IMG"
        src={image}
        alt="Logo image"
        height="37px"
        width="37px" />
        <div className="SideMenu__Profile__Text">
        <h1 className="SideMenu__Profile__Header">Evano</h1>
        <span className="SideMenu__Profile__Span">Project Manager</span>
        </div>
      </div>
    );
  };
  