import { STATUSES } from "./../consts";
export const StatusFilter = ({ onSelect, setFilterValue }) => {
  const onChange = (event) => {
    onSelect && onSelect(event.target.value);
    setFilterValue(event.target.value);
  };

  return (
    <select name="filterStatus" onChange={onChange}>
      <option value="" />
      {STATUSES.map((status, index) => (
        <option key={index} value={status.value}>
          {status.label}
        </option>
      ))}
    </select>
  );
};
