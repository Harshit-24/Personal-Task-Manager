const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setFilter("all")}
        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
          filter === "all"
            ? "bg-white text-purple-700 shadow-md hover:shadow-lg hover:scale-105"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
          filter === "active"
            ? "bg-white text-purple-700 shadow-md hover:shadow-lg hover:scale-105"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
          filter === "completed"
            ? "bg-white text-purple-700 shadow-md hover:shadow-lg hover:scale-105"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
