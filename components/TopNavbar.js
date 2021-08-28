import Image from "next/image";
import Link from "next/link";

function TopNavbar() {
  return (
    <header className="flex top-0 items-center bg-white p-1 md:px-5 mb-5">
      <div className="flex flex-grow md:hidden mt-1">
        {/* Left */}
        <div className="flex items-center">
          <div>
            <button className="cursor-pointer ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button
              title="search"
              className="ml-4 pb-1 hover:border-b-2 border-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black font-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.4}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* center */}
        <div className="flex justify-center flex-grow mx-auto ml-4">
          <div className="cursor-pointer">
            <Link href="/">
              <a>
                <svg height="30" viewBox="0 0 36 36" width="30">
                  <path
                    d="m7.1 32c3 2.3 6.8 3.7 10.9 3.7 4.5 0 8.6-1.7 11.7-4.4-1.4.9-5.4 3-11.7 3-5.5 0-9-1.2-10.9-2.3m12.1.9c4.4 0 9.2-1.2 12-3.6.8-.6 1.5-1.5 2.2-2.6.4-.7.8-1.5 1.1-2.2-2.7 3.9-10.4 6.4-18.4 6.4-5.6 0-11.7-1.8-14.1-5.3 2.2 4.8 8.9 7.3 17.2 7.3m-4.8-7.8c-9.1 0-13.4-4.2-14.1-7.1 0 1 .1 2.2.3 3.1.1.4.4 1 .9 1.6 2.2 2.3 7.7 5.5 17.2 5.5 12.9 0 15.9-4.3 16.5-5.7.4-1 .7-2.8.7-4.4v-1c-.9 3.4-11.9 8-21.5 8m-12.5-14.7c-.5 1-1.1 2.8-1.3 3.7-.1.4 0 .6.1.9 1.1 2.3 6.6 6 19.4 6 7.8 0 13.9-1.9 14.9-5.4.2-.6.2-1.3 0-2.2-.3-1-.7-2.2-1.2-3.1.1 4.6-12.7 7.6-19.2 7.6-7 0-12.9-2.8-12.9-6.3.1-.5.2-.9.2-1.2m27.8-5.7c.1.1.1.2.1.4 0 2-6 5.4-15.6 5.4-7.1 0-8.4-2.6-8.4-4.3 0-.6.2-1.2.7-1.8-.9.9-1.7 1.7-2.5 2.7-.3.4-.5.8-.5 1 0 3.5 8.7 5.9 16.7 5.9 8.6 0 12.5-2.8 12.5-5.3 0-.9-.3-1.4-1.2-2.4-.6-.6-1.2-1.1-1.8-1.6m-2.6-1.9c-2.7-1.6-5.7-2.5-9.1-2.5s-6.5.9-9.2 2.6c-.8.4-1.3.8-1.3 1.3 0 1.5 3.5 3.1 9.7 3.1 6.1 0 10.9-1.8 10.9-3.5.1-.3-.3-.6-1-1"
                    fill="#009fdb"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end">
          <div className="hover:border-b-2 border-black cursor-pointer">
            <Link href="">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="hover:border-b-2 border-black cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="hover:border-b-2 border-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/* >md */}
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="hidden md:flex mt-1 space-x-3 align-middle items-center justify-center">
        <div className="cursor-pointer">
          <Link href="/">
            <a>
              <svg height="28" viewBox="0 0 36 36" width="28">
                <path
                  d="m7.1 32c3 2.3 6.8 3.7 10.9 3.7 4.5 0 8.6-1.7 11.7-4.4-1.4.9-5.4 3-11.7 3-5.5 0-9-1.2-10.9-2.3m12.1.9c4.4 0 9.2-1.2 12-3.6.8-.6 1.5-1.5 2.2-2.6.4-.7.8-1.5 1.1-2.2-2.7 3.9-10.4 6.4-18.4 6.4-5.6 0-11.7-1.8-14.1-5.3 2.2 4.8 8.9 7.3 17.2 7.3m-4.8-7.8c-9.1 0-13.4-4.2-14.1-7.1 0 1 .1 2.2.3 3.1.1.4.4 1 .9 1.6 2.2 2.3 7.7 5.5 17.2 5.5 12.9 0 15.9-4.3 16.5-5.7.4-1 .7-2.8.7-4.4v-1c-.9 3.4-11.9 8-21.5 8m-12.5-14.7c-.5 1-1.1 2.8-1.3 3.7-.1.4 0 .6.1.9 1.1 2.3 6.6 6 19.4 6 7.8 0 13.9-1.9 14.9-5.4.2-.6.2-1.3 0-2.2-.3-1-.7-2.2-1.2-3.1.1 4.6-12.7 7.6-19.2 7.6-7 0-12.9-2.8-12.9-6.3.1-.5.2-.9.2-1.2m27.8-5.7c.1.1.1.2.1.4 0 2-6 5.4-15.6 5.4-7.1 0-8.4-2.6-8.4-4.3 0-.6.2-1.2.7-1.8-.9.9-1.7 1.7-2.5 2.7-.3.4-.5.8-.5 1 0 3.5 8.7 5.9 16.7 5.9 8.6 0 12.5-2.8 12.5-5.3 0-.9-.3-1.4-1.2-2.4-.6-.6-1.2-1.1-1.8-1.6m-2.6-1.9c-2.7-1.6-5.7-2.5-9.1-2.5s-6.5.9-9.2 2.6c-.8.4-1.3.8-1.3 1.3 0 1.5 3.5 3.1 9.7 3.1 6.1 0 10.9-1.8 10.9-3.5.1-.3-.3-.6-1-1"
                  fill="#009fdb"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="h-[22px] w-[1px] bg-gray-400 items-center inline-block align-middle" />

        <div>
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block align-middle"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;

// <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// </svg>

//  <div className="px-10 py-2 align-middle hidden md:flex">
//    <div className="flex align-middle">
//      <div className="cursor-pointer">
//        <Link href="/">
//          <a>
//            <svg height="28" viewBox="0 0 36 36" width="28">
//              <path
//                d="m7.1 32c3 2.3 6.8 3.7 10.9 3.7 4.5 0 8.6-1.7 11.7-4.4-1.4.9-5.4 3-11.7 3-5.5 0-9-1.2-10.9-2.3m12.1.9c4.4 0 9.2-1.2 12-3.6.8-.6 1.5-1.5 2.2-2.6.4-.7.8-1.5 1.1-2.2-2.7 3.9-10.4 6.4-18.4 6.4-5.6 0-11.7-1.8-14.1-5.3 2.2 4.8 8.9 7.3 17.2 7.3m-4.8-7.8c-9.1 0-13.4-4.2-14.1-7.1 0 1 .1 2.2.3 3.1.1.4.4 1 .9 1.6 2.2 2.3 7.7 5.5 17.2 5.5 12.9 0 15.9-4.3 16.5-5.7.4-1 .7-2.8.7-4.4v-1c-.9 3.4-11.9 8-21.5 8m-12.5-14.7c-.5 1-1.1 2.8-1.3 3.7-.1.4 0 .6.1.9 1.1 2.3 6.6 6 19.4 6 7.8 0 13.9-1.9 14.9-5.4.2-.6.2-1.3 0-2.2-.3-1-.7-2.2-1.2-3.1.1 4.6-12.7 7.6-19.2 7.6-7 0-12.9-2.8-12.9-6.3.1-.5.2-.9.2-1.2m27.8-5.7c.1.1.1.2.1.4 0 2-6 5.4-15.6 5.4-7.1 0-8.4-2.6-8.4-4.3 0-.6.2-1.2.7-1.8-.9.9-1.7 1.7-2.5 2.7-.3.4-.5.8-.5 1 0 3.5 8.7 5.9 16.7 5.9 8.6 0 12.5-2.8 12.5-5.3 0-.9-.3-1.4-1.2-2.4-.6-.6-1.2-1.1-1.8-1.6m-2.6-1.9c-2.7-1.6-5.7-2.5-9.1-2.5s-6.5.9-9.2 2.6c-.8.4-1.3.8-1.3 1.3 0 1.5 3.5 3.1 9.7 3.1 6.1 0 10.9-1.8 10.9-3.5.1-.3-.3-.6-1-1"
//                fill="#009fdb"
//              ></path>
//            </svg>
//          </a>
//        </Link>
//      </div>
//      <div className="flex items-center my-auto">
//        <span className="font-light text-gray-500 px-3 text-xl -translate-y-1 select-none">
//          |
//        </span>
//      </div>
//      <div>
//        <button className="cursor-pointer">
//          <svg
//            xmlns="http://www.w3.org/2000/svg"
//            className="h-7 w-7"
//            fill="none"
//            viewBox="0 0 24 24"
//            stroke="currentColor"
//          >
//            <path
//              strokeLinecap="round"
//              strokeLinejoin="round"
//              strokeWidth={2}
//              d="M4 6h16M4 12h16M4 18h16"
//            />
//          </svg>
//        </button>
//      </div>
//      <div className="ml-12">
//        <form
//          action="https://www.att.com/search/"
//          className="group flex border-[1px] border-gray-600 rounded px-4 py-[4px] items-center my-auto"
//        >
//          <input
//            className=" focus:outline-none placeholder-gray-600 font-light text-sm text-gray-800"
//            type="search"
//            placeholder="I'm looking for..."
//          />
//          <button title="search" className="pl-4 lg:pl-20">
//            <svg
//              xmlns="http://www.w3.org/2000/svg"
//              className="h-5 w-5 text-gray-700 font-light"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke="currentColor"
//            >
//              <path
//                strokeLinecap="round"
//                strokeLinejoin="round"
//                strokeWidth={2}
//                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//              />
//            </svg>
//          </button>
//        </form>
//      </div>
//    </div>
//  </div>;
