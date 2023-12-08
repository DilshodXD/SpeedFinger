function Navbar() {
  return (
    <div>
      <div className="container m-auto py-4 flex justify-between items-center">
        <h1 className="font-black text-4xl	text-gray-900">SpeedFingers 🖐️</h1>
        <div className="flex gap-3">
          <button className="px-4 py-1 bg-gray-900 rounded-xl text-white">
            O'zbekcha
          </button>
          <button className="px-4 py-1 bg-gray-900 rounded-xl text-white">
            Inglizch
          </button>
          <button className="px-4 py-1 bg-gray-900 rounded-xl text-white">
            Ruscha
          </button>
        </div>
      </div>
      <hr className="border-2 border-gray-900	"/>
    </div>
  );
}

export default Navbar;
