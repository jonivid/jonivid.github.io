import "./styles.css";
import { Table } from "./components/Table";
import { HEADERS, MAX_ITEMS_PER_PAGE } from "./consts";
import { Pagination } from "./components/Pagination";
import { StatusFilter } from "./components/StatusFilter";
import { SearchInput } from "./components/SearchInput";
import rawBillsData from "./data/bills";
import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";

export default function App() {
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [data, setData] = useState(rawBillsData);
  const [numOfPages, setNumOfPages] = useState(rawBillsData.length / 10);
//
  useEffect(() => {
    const tempData = [...rawBillsData];
    const dataBySearchValue = filterArrayBySearchValue(tempData, searchValue);
    const filteredData = dataBySearchValue.filter((row) =>
      filterValue !== "" ? row.status === filterValue : true
    );
    setNumOfPages(Math.ceil(filteredData.length / 10));
    // setNumOfPages(filteredData.length / 10);
    setData(filteredData.slice(page === 0 ? 0 : page * 20, page * 20 + 20));
  }, [page, searchValue, filterValue]);

  console.log({ numOfPages });

  return (
    <div className="App">
      <h1>Bills Table</h1>
      <div>
        <SearchInput setSearchValue={setSearchValue} />
        <StatusFilter setFilterValue={setFilterValue} />
      </div>
      <Table headers={HEADERS} data={data} />
      <Pagination
        currentPage={page}
        numOfPages={numOfPages}
        setPage={setPage}
      />
    </div>
  );
}

export const filterArrayBySearchValue = (data, searchValue) => {
  // Ensure the search value is lowercase for case-insensitive matching
  const searchValueLower = searchValue.toLowerCase();

  return data.filter((item) => {
    // Convert relevant fields to lowercase and check for a match
    const companyNameLower = item.companyName.toLowerCase();
    const vendorAddressLower = item.vendorAddress.toLowerCase();
    const vendorNameLower = item.vendorName.toLowerCase();
    const amountString = item.amount.toString(); // Convert amount to string for search

    return (
      companyNameLower.includes(searchValueLower) ||
      vendorAddressLower.includes(searchValueLower) ||
      vendorNameLower.includes(searchValueLower) ||
      amountString.includes(searchValueLower)
    );
  });
};
