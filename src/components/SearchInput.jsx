export const SearchInput = ({ onChange, setSearchValue }) => {
  const handleOnChange = (event) => {
    onChange && onChange(event.target.value);
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <span className="Search">
      <span>Search</span>
      <input type="input" onChange={handleOnChange} />
    </span>
  );
};
