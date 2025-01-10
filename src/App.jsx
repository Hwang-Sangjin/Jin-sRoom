import { RecoilRoot, useRecoilState } from "recoil";
import "./App.css";
import Container from "./components/Container";
import { useEffect } from "react";
import { sectionState } from "./recoil/sectionState";

function App() {
  const [section, setSection] = useRecoilState(sectionState);

  const changeColor = (color) => {
    document.getElementById("root").style.backgroundColor = color;
  };

  useEffect(() => {
    setSection(0);
    changeColor("#ce5200a4");
  }, []);
  return <Container />;
}

export default App;
