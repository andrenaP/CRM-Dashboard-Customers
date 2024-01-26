import {SideMenu} from "components/SideMenu/SideMenu"
import {Main} from "components/MainMenu/Main"
import './App.styles.css';

export const App = () => {
  return (
    <div className="App">
      <SideMenu />
      <Main/>
    </div>
  );
};
