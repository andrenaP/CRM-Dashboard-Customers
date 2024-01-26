export const TableElement = ({id,Name,Company,Phone,Email,Country,Status}) => {
    return (
    <tr key={id}>
    <td>{Name}</td>
    <td>{Company}</td>
    <td>{Phone}</td>
    <td>{Email}</td>
    <td>{Country}</td>
    {Status ? <td>active</td> : <td>Inactive</td>}
    {/* <td>{Status}</td> */}
    </tr>
    );
  };
  