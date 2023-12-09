const english = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const russian = [
  ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
  ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
  ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
];

export default function Home({ language }) {
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
        {(language ? english : russian).map((e) => (
          <div className="flex gap-2">
            {e.map((i) => (
              <span className="text-white font-bold uppercase text-xl py-2 px-4 rounded-lg bg-neutral-700">
                {i}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}