const TaskStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-7 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
              Total Tasks
            </p>
            <p className="text-4xl font-bold text-gray-800">{stats.total}</p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-7 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
              Active
            </p>
            <p className="text-4xl font-bold text-blue-600">{stats.active}</p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-7 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
              Completed
            </p>
            <p className="text-4xl font-bold text-green-600">
              {stats.completed}
            </p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
