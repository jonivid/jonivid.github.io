export const Table = ({ headers, data, onHeaderClicked }) => {
  const handleOnHeaderClicked = (header) => () =>
    onHeaderClicked && onHeaderClicked(header);
  return (
    <table className="Table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th onClick={handleOnHeaderClicked(header)} key={index}>
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td key={index}>{row[header.column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
