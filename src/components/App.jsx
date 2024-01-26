import {SideMenu} from "components/SideMenu/SideMenu"
import {Main} from "components/MainMenu/Main"
import './App.styles.css';

export const App = () => {
  return (
    <section className="App">
      <SideMenu />
      <Main/>
    </section>
  );
};
