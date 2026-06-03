const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative flex-1">
      <svg
        className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="SEARCH TASKS..."
        className="w-full border-[3px] border-black bg-white py-3 pl-11 pr-4 text-sm font-medium placeholder:text-gray-400 placeholder:tracking-wider focus:outline-none focus:shadow-[3px_3px_0_0_black] focus:-translate-x-[2px] focus:-translate-y-[2px] transition-all"
      />
    </div>
  );
};

export default SearchBar;
