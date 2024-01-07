export default function Keyboard({keyboard}) {
  return (
  
      <div className="keyboard">
        {keyboard.map((e, index) => (
          <div key={index} className="flex gap-2">
            {e.map((i, index) => (
              <div key={index} className={"key rounded-lg " + i[1]}>
                <span className="key-en text-white font-bold uppercase text-xl ">
                  {i[0]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
  );
}
