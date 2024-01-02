const keyboard = [
  [
    ["q", "й", "key-1"],
    ["w", "ц", "key-2"],
    ["e", "у", "key-3"],
    ["r", "к", "key-4"],
    ["t", "е", "key-4"],
    ["y", "н", "key-5"],
    ["u", "г", "key-5"],
    ["i", "ш", "key-3"],
    ["o", "щ", "key-2"],
    ["p", "з", "key-1"],
    ["[", "х", "key-1"],
    ["]", "ъ", "key-1"],
  ],
  [
    ["a", "ф", "key-1"],
    ["s", "ы", "key-2"],
    ["d", "в", "key-3"],
    ["f", "а", "key-4"],
    ["g", "п", "key-4"],
    ["h", "р", "key-5"],
    ["j", "о", "key-5"],
    ["k", "л", "key-3"],
    ["l", "д", "key-2"],
    [";", "ж", "key-1"],
    ["'", "э", "key-1"],
    // ["", "", "key-1"],
  ],
  [
    ["z", "я", "key-1"],
    ["x", "ч", "key-2"],
    ["c", "с", "key-3"],
    ["v", "м", "key-4"],
    ["b", "и", "key-4"],
    ["n", "т", "key-5"],
    ["m", "ь", "key-5"],
    [",", "б", "key-3"],
    [".", "ю", "key-2"],
    ["/", ".", "key-1"],
  ],
];

export default function Home() {
  return (
    <div className="">
      <div className="mt-16 mb-14">
        <p className="text-neutral-400 font-black w-4/6 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ut quam
          animi possimus eum aspernatur voluptatum quia nobis nam praesentium
          ipsa eaque, esse labore aliquam odio dolorem deserunt beatae. Magnam.
        </p>
      </div>
      <div className="keyboard">
        {keyboard.map((e, index) => (
          <div key={index} className="flex gap-2">
            {e.map((i, index) => (
              <div key={index} className={"key rounded-lg " + i[2]}>
                <span className="key-en text-white font-bold uppercase text-xl ">
                  {i[0]}
                </span>
                <span className="key-ru text-white font-bold uppercase text-base">
                  {i[1]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
