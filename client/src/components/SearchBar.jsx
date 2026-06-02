const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-5 py-4 pl-14 bg-white rounded-xl border-2 border-transparent focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all shadow-md text-gray-700 placeholder-gray-400"
      />
      <svg
        className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2"
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
    </div>
  );
};

export default SearchBar;
