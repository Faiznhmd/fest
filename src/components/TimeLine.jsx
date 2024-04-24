const TimeLine = () => {
  return (
    <>
      <h1 className="font-bold text-2xl my-4 justify-center items-center flex ">
        Events TimeLine
      </h1>
      <ol class="items-center sm:flex px-4 lg:justify-center pb-5 gap-6">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-3xl">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300 text-3xl"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  className="text-3xl"
                />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Day 1 <br /> Morning
            </h3>
            <time class="btext-base font-normal text-gray-500 dark:text-gray-400">
              Robo Soccer Round 1 10:00AM-1:000PM
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Tech Trivia Prelims 10AM-11:30AM
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Evening
            </h3>
            <time class="btext-base font-normal text-gray-500 dark:text-gray-400">
              Cyber Battleground Round 1 3:30PM-5:00PM
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Mine Field Rescue Round 1 4:00PM-6:00pm
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Day 2 <br /> Morning
            </h3>
            <time class="btext-base font-normal text-gray-500 dark:text-gray-400">
              Cyber Battleground Round 2 10AM-11:30AM
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Tech Trivia Round 2 10AM-1PM
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Evening
            </h3>
            <time class="btext-base font-normal text-gray-500 dark:text-gray-400">
              WorkShop 3:30PM-5:30PM
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Mine Field Rescue Round 2 5:30PM-7:00PM
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Day 3 <br /> Morning
            </h3>
            <time class="btext-base font-normal text-gray-500 dark:text-gray-400">
              Code Quest 10:00AM-12:00AM
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Innovation Tank 10:00AM-2:00PM
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Evening
            </h3>
            <time class="btext-base font-normal text-gray-500 dark:text-gray-400">
              Robo Scooer 3:30PM-5:30PM
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Robo Scooer
            </p>
          </div>
        </li>
      </ol>
    </>
  );
};

export default TimeLine;
