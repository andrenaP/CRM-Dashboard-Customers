import Jsondata from "data/data.json"
import {TableElement} from "./TableElement"
export const TableElements = () => {
    return (
        <table>
            <thead>
  <tr>
    <td>Customer Name</td>
    <td>Company</td>
    <td>Phone Number</td>
    <td>Email</td>
    <td>Country</td>
    <td>Status</td>
  </tr>
  {Jsondata.map((data) =>{
return TableElement(data)
  })}
  </thead>
</table>
    );
  };
  