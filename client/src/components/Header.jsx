const Header = () => {
  return (
    <header className="border-b-[3px] border-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="size-11 border-[3px] border-black bg-[color:var(--brand)] flex items-center justify-center shadow-[3px_3px_0_0_black]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="size-6"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-none tracking-tight">
              TaskVault
            </h1>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Task Manager
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span className="border-[2px] border-black bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
