import './Main.styles.css';
import {TableElements} from "./TableElements.jsx"
import {SearchSvg} from "img/icons"
export const MainTable = () => {
    return (
<section className='Main__Table'>
    <div className='Main__Table__FirstPart'>
    <div className='Main__Table__FirstPart__Text'>
<h3 className='Main__Table_Text__FirstPart__Header'>All Customers</h3>
<span className='Main__Table_Text__FirstPart__Span'>Active Members</span>
</div>
<form action="search" className='Main__Table__Form'>
    <div className='Main__Table__Form__SearchSvg'>
    <SearchSvg/>
    </div>
    <input type="text" placeholder="Search" className='Main__Table__Form__Input'/>
</form>
</div>
<TableElements/>
<div>
    <div className='Main__Table__Bottom'>
<span className='Main__Table__Bottom__Span'>Showing data 1 to 8 of 256K entries</span>
<div className='Main__Table__Bottom__Plagination'>
    <button>{"<"}</button>
    <button className='active'>{"1"}</button>
    <button>{"2"}</button>
    <button>{"3"}</button>
    <button>{"4"}</button>
    ...
    <button>{"40"}</button>
    <button>{">"}</button>
</div>
</div>
</div>
       </section>
    );
  };
  