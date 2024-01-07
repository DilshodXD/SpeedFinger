import "./index.css";
import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import { useState } from "react";

function App() {
  const [dropDown, setDropDown] = useState(true);
  const [language, setLanguage] = useState("eng");
  const keyboardRu = [
    [
      ["й", "key-1"],
      ["ц", "key-2"],
      ["у", "key-3"],
      ["к", "key-4"],
      ["е", "key-4"],
      ["н", "key-5"],
      ["г", "key-5"],
      ["ш", "key-3"],
      ["щ", "key-2"],
      ["з", "key-1"],
      ["х", "key-1"],
      ["ъ", "key-1"],
    ],
    [
      ["ф", "key-1"],
      ["ы", "key-2"],
      ["в", "key-3"],
      ["а", "key-4"],
      ["п", "key-4"],
      ["р", "key-5"],
      ["о", "key-5"],
      ["л", "key-3"],
      ["д", "key-2"],
      ["ж", "key-1"],
      ["э", "key-1"],
    ],
    [
      ["я", "key-1"],
      ["ч", "key-2"],
      ["с", "key-3"],
      ["м", "key-4"],
      ["и", "key-4"],
      ["т", "key-5"],
      ["ь", "key-5"],
      ["б", "key-3"],
      ["ю", "key-2"],
      [".", "key-1"],
    ],
  ];
  const keyboardEng = [
    [
      ["q", "key-1"],
      ["w", "key-2"],
      ["e", "key-3"],
      ["r", "key-4"],
      ["t", "key-4"],
      ["y", "key-5"],
      ["u", "key-5"],
      ["i", "key-3"],
      ["o", "key-2"],
      ["p", "key-1"],
      ["[", "key-1"],
      ["]", "key-1"],
    ],
    [
      ["a", "key-1"],
      ["s", "key-2"],
      ["d", "key-3"],
      ["f", "key-4"],
      ["g", "key-4"],
      ["h", "key-5"],
      ["j", "key-5"],
      ["k", "key-3"],
      ["l", "key-2"],
      [";", "key-1"],
      ["'", "key-1"],
    ],
    [
      ["z", "key-1"],
      ["x", "key-2"],
      ["c", "key-3"],
      ["v", "key-4"],
      ["b", "key-4"],
      ["n", "key-5"],
      ["m", "key-5"],
      [",", "key-3"],
      [".", "key-2  "],
      ["/", "key-1"],
    ],
  ];

  function handleDropDown() {
    setDropDown(!dropDown);
  }
  function changeLanguage(e) {
    setLanguage(e);
  }

  return (
    <>
      <div className="h-screen bg-neutral-900 ">
        <div className="mb-16">
          <Navbar
            handleDropDown={handleDropDown}
            dropDown={dropDown}
            changeLanguage={changeLanguage}
          />
        </div>
        <Keyboard
          language={language}
          keyboard={language == "eng" ? keyboardEng : keyboardRu}
        />
      </div>
    </>
  );
}

export default App;
