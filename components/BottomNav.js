// import BottomNavItems from "./BottomNavItems";
import Link from "next/dist/client/link";

function BottomNav() {
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-14 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* <BottomNavItems title={CurrencyDolarIcon} /> */}
        {/* deals */}
        <Link href="">
          <a className="justify-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 hover:text-gray-700"
            >
              <path d="M29.16 12.54A6.39 6.39 0 0128 11a7.08 7.08 0 01-.29-2 5.28 5.28 0 00-1.11-3.66A5.28 5.28 0 0023 4.28 7.08 7.08 0 0121 4a6.39 6.39 0 01-1.52-1.15A5.38 5.38 0 0016 1a5.38 5.38 0 00-3.46 1.84A6.39 6.39 0 0111 4a7.08 7.08 0 01-2 .29 5.28 5.28 0 00-3.61 1.1 5.28 5.28 0 00-1.11 3.66A7.08 7.08 0 014 11a6.39 6.39 0 01-1.15 1.52A5.38 5.38 0 001 16a5.38 5.38 0 001.84 3.46A6.39 6.39 0 014 21a7.08 7.08 0 01.29 2 5.28 5.28 0 001.11 3.66 5.28 5.28 0 003.66 1.11A7.08 7.08 0 0111 28a6.39 6.39 0 011.52 1.15A5.38 5.38 0 0016 31a5.38 5.38 0 003.46-1.84A6.39 6.39 0 0121 28a7.08 7.08 0 012-.29 5.28 5.28 0 003.66-1.11 5.28 5.28 0 001.06-3.6 7.08 7.08 0 01.28-2 6.39 6.39 0 011.15-1.52A5.38 5.38 0 0031 16a5.38 5.38 0 00-1.84-3.46zm-1.48 5.58a7.42 7.42 0 00-1.51 2.09 8 8 0 00-.44 2.63 4 4 0 01-.54 2.35 4 4 0 01-2.35.54 8 8 0 00-2.63.44 7.42 7.42 0 00-2.09 1.51C17.37 28.36 16.66 29 16 29s-1.37-.64-2.12-1.32a7.42 7.42 0 00-2.09-1.51 8 8 0 00-2.63-.44 4 4 0 01-2.35-.54 4 4 0 01-.54-2.35 8 8 0 00-.44-2.63 7.42 7.42 0 00-1.51-2.09C3.64 17.37 3 16.66 3 16s.64-1.37 1.32-2.12a7.42 7.42 0 001.51-2.09 8 8 0 00.44-2.63 4 4 0 01.54-2.35 4 4 0 012.35-.54 8 8 0 002.63-.44 7.42 7.42 0 002.09-1.51C14.63 3.64 15.34 3 16 3s1.37.64 2.12 1.32a7.42 7.42 0 002.09 1.51 8 8 0 002.63.44 4 4 0 012.35.54 4 4 0 01.54 2.35 8 8 0 00.44 2.63 7.42 7.42 0 001.51 2.09c.68.75 1.32 1.46 1.32 2.12s-.64 1.37-1.32 2.12zm-6.68.37A3.59 3.59 0 0117.34 22H17v2h-2v-2h-3v-2h5.34a1.51 1.51 0 100-3h-2.68A3.58 3.58 0 0111 13.51 3.52 3.52 0 0114.52 10H15V8h2v2h3v2h-5.48A1.51 1.51 0 0013 13.49 1.59 1.59 0 0014.66 15h2.68A3.58 3.58 0 0121 18.49z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              Deals
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="justify-center mx-auto content-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 justify-center mx-auto"
            >
              <path d="M22 31H10a3 3 0 01-3-3V4a3 3 0 013-3h12a3 3 0 013 3v24a3 3 0 01-3 3zM10 3a1 1 0 00-1 1v24a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zm9 2h-6v2h6z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              Phones & devices
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="justify-center mx-auto content-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 justify-center mx-auto"
            >
              <path d="M5 24h2v5H5zm7 5h2V17h-2zm7 0h2V10h-2zm7-26v26h2V3z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              Wireless
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="justify-center mx-auto content-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 justify-center mx-auto"
            >
              <path d="M15 26h2v2h-2zm-3.86-4.71l1.42 1.42a4.84 4.84 0 016.87 0l1.42-1.42a6.87 6.87 0 00-9.71 0zM1 11.29l1.41 1.42a19.21 19.21 0 0127.15 0L31 11.29a21.22 21.22 0 00-30 0zm5.05 5l1.41 1.42a12.08 12.08 0 0117.06 0l1.41-1.42a14.07 14.07 0 00-19.87 0z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              Internet
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="justify-center mx-auto content-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 justify-center mx-auto"
            >
              <path d="M8 26h16v2H8zM31 7v14a3 3 0 01-3 3H4a3 3 0 01-3-3V7a3 3 0 013-3h24a3 3 0 013 3zm-2 0a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1h24a1 1 0 001-1z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              TV
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="justify-center mx-auto content-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 justify-center mx-auto"
            >
              <path d="M20 20a3 3 0 01-3 3v2h-2v-2h-2v-2h4a1 1 0 000-2h-2a3 3 0 010-6v-2h2v2h2v2h-4a1 1 0 000 2h2a3 3 0 013 3zm5-16v24a3 3 0 01-3 3H10a3 3 0 01-3-3V4a3 3 0 013-3h12a3 3 0 013 3zm-2 0a1 1 0 00-1-1H10a1 1 0 00-1 1v24a1 1 0 001 1h12a1 1 0 001-1zm-4 1h-6v2h6z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              Prepaid
            </span>
          </a>
        </Link>
        <Link href="">
          <a className="justify-center mx-auto content-center group text-gray-800 hover:text-gray-700 hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 justify-center mx-auto"
            >
              <path d="M28 18h-4v-2h4a1 1 0 001-1V5a1 1 0 00-1-1H10a1 1 0 00-1 1v6H7V5a3 3 0 013-3h18a3 3 0 013 3v10a3 3 0 01-3 3zm0 2h-4v2h4zm-4 4v3a3 3 0 01-3 3H4a3 3 0 01-3-3v-3h2v-8a3 3 0 013-3h13a3 3 0 013 3v8zM5 24h15v-8a1 1 0 00-1-1H6a1 1 0 00-1 1zm17 2H3v1a1 1 0 001 1h17a1 1 0 001-1z"></path>
            </svg>
            <span className="flex justify-center items-center text-[11px] group-hover:underline -translate-y-2">
              Bundles
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default BottomNav;
