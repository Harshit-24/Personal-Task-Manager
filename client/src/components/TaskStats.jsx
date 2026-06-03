const TaskStats = ({ stats }) => {
  return (
    <section className="mb-12 grid grid-cols-3 gap-3 md:gap-6">
      <div className="border-[3px] border-black bg-[color:var(--tint-blue)] p-4 shadow-[5px_5px_0_0_black] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] md:p-6">
        <div className="mb-3 flex items-center justify-between md:mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] md:text-[10px] md:tracking-[0.2em]">
            Total tasks
          </span>
          <div className="hidden size-9 items-center justify-center border-[2px] border-black bg-white md:flex">
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight md:text-5xl">
          {String(stats.total).padStart(2, "0")}
        </div>
      </div>

      <div className="border-[3px] border-black bg-[color:var(--brand)] p-4 shadow-[5px_5px_0_0_black] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] md:p-6">
        <div className="mb-3 flex items-center justify-between md:mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] md:text-[10px] md:tracking-[0.2em]">
            Active
          </span>
          <div className="hidden size-9 items-center justify-center border-[2px] border-black bg-white md:flex">
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight md:text-5xl">
          {String(stats.active).padStart(2, "0")}
        </div>
      </div>

      <div className="border-[3px] border-black bg-[color:var(--tint-pink)] p-4 shadow-[5px_5px_0_0_black] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] md:p-6">
        <div className="mb-3 flex items-center justify-between md:mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] md:text-[10px] md:tracking-[0.2em]">
            Completed
          </span>
          <div className="hidden size-9 items-center justify-center border-[2px] border-black bg-white md:flex">
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight md:text-5xl">
          {String(stats.completed).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
};

export default TaskStats;
