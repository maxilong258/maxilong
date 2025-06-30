const TitleHeader = ({ title, sub }: { title: string, sub: string }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-gray-200 text-gray-600 dark:bg-[#1e1f21] dark:text-gray-400 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;