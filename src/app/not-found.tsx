const NotFound = () => {
  return (
    <>
      <title className="">Terrence&apos;s Portfolio</title>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className={"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"}>Hey there! There&apos;s nothing to find here!</div>
        <div className={"mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"}>Maybe I&apos;ll come up with an idea for this page in the future, but nothing for now - sorry!</div>
        <a href={"/"} className={"no-underline border-2 rounded-md border-slate-600 p-2 hover:bg-blue-500 hover:text-white"}>Return To Home</a>
      </div>
    </>
  );
};

export default NotFound;