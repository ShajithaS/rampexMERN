import { useRef, useEffect , useState } from "react";

const UseRef = () => {
  var [text, setText] = useState("");
  var prevrender = useRef();
  useEffect(() => {
    prevrender.current = text;
  },[text]);
  return (
    <div>
      <h1>This is useRef example</h1>
      Type your Text:
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>the current render text is :{text}</h2>
      <h2>the previous render text is :{prevrender.current}</h2>
    </div>
  );
};
export default UseRef;
