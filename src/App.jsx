import { React, useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StlyedComponents } from "./components/StyledComponents";
import { StlyedJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickChangeOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StlyedJsx />
      <StlyedComponents />
      <Emotion />
      <br />
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickChangeOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
