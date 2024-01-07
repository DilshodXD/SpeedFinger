function Navbar({ handleDropDown, dropDown , changeLanguage }) {
  return (
    <div className="bg-neutral-900 ">
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
            <div
              style={dropDown ? { display: "none" } : { display: "block" }}
              className="dropDown-list border-2 py-2 rounded-2xl bg-neutral-800"
            >
              <button onClick={() => {changeLanguage('eng'); handleDropDown()}} className="text-white px-4 mb-2">
                  English
              </button>

              <hr className="w-full" />
              <button onClick={() => {changeLanguage('ru'); handleDropDown()}} className="text-white px-4 mt-2">
                  Russian
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
