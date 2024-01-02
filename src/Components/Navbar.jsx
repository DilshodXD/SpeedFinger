import { Outlet, Link } from "react-router-dom";

function Navbar({ handleDropDown, dropDown }) {
  return (
    <div className="bg-neutral-900 h-screen">
      <div className="shadow-slate-200/20 shadow-lg">
        <div className=" container m-auto py-1 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-3xl">🖐️</span>
            <p className="font-black font-sm text-3xl	text-white">
              SpeedFingers
            </p>
          </div>
          <div className="dropDown flex gap-3">
            <button
              onClick={handleDropDown}
              className="text-white font-bold border-2 rounded-2xl px-4 py-1 key-3"
            >
              Language
            </button>
            <ul
              style={dropDown ? { display: "none" } : { display: "block" }}
              className="dropDown-list border-2 py-2 rounded-2xl bg-neutral-800"
            >
              <li className="px-4 mb-2">
                <Link
                  onClick={handleDropDown}
                  to={""}
                  className="text-white font-bold"
                >
                  English
                </Link>
              </li>

              <hr className="w-full" />
              <li className="px-4 mt-2">
                <Link
                  onClick={handleDropDown}
                  to={"ru"}
                  className="text-white font-bold "
                >
                  Russian
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
