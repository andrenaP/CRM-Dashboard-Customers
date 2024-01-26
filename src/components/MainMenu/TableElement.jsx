export const TableElement = ({id,Name,Company,Phone,Email,Country,Status}) => {
    return (
    <tr key={id}>
    <td>{Name}</td>
    <td>{Company}</td>
    <td>{Phone}</td>
    <td>{Email}</td>
    <td>{Country}</td>
    {Status ? <td> <div className="Main__Table_active"> Active</div></td> : <td> <div  className="Main__Table_inactive">Inactive</div> </td>}
    {/* <td>{Status}</td> */}
    </tr>
    );
  };
  