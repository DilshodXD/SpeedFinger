import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-900 h-screen">
      <div className="shadow-slate-200/20 shadow-lg">
        <div className=" container m-auto py-1 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-3xl">🖐️</span>
            <p className="font-black text-3xl	text-white">SpeedFingers</p>
          </div>
          <div className="flex gap-3"></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
