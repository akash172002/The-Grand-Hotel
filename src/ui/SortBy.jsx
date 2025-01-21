/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searcParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searcParams.set("sortBy", e.target.value);

    setSearchParams(searcParams);
  }
  const sortBy = searcParams.get("sortBy") || "";

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
