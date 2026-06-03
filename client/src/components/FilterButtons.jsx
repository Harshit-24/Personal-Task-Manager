const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex border-[3px] border-black bg-white shadow-[3px_3px_0_0_black]">
      <button
        onClick={() => setFilter("all")}
        className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
          filter === "all"
            ? "bg-[color:var(--brand)] text-black"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        all
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`border-l-[3px] border-black px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
          filter === "active"
            ? "bg-[color:var(--brand)] text-black"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`border-l-[3px] border-black px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
          filter === "completed"
            ? "bg-[color:var(--brand)] text-black"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        completed
      </button>
    </div>
  );
};

export default FilterButtons;
