import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchUsers(query));
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        placeholder="Search GitHub users..."
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
