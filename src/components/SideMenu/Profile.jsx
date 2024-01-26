import './SideMenu.styles.css';
import ManImage from "img/ManImage.png"

export const Profile = () => {
    return (
      <section className="SideMenu__Profile">
        <img
        className="SideMenu__Profile__IMG"
        src={ManImage}
        alt="Logo image"
        height="37px"
        width="37px" />
        <div className="SideMenu__Profile__Text">
        <h1 className="SideMenu__Profile__Header">Evano</h1>
        <span className="SideMenu__Profile__Span">Project Manager</span>
        </div>
      </section>
    );
  };
  