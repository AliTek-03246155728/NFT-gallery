import React from "react";

function FilterBar({search,setSearch,sortOrder, setSortOrder}) {
  return (
    <div className="filter-bar">
      <input type="text"  placeholder="Search artist..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={sortOrder}  onChange={(e) => setSortOrder(e.target.value)} >
        <option value="">Sort By</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
        <option value="az">Name A → Z</option>
      </select>
    </div>
  );
}

export default FilterBar;