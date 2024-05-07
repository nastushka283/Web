import Block from "./components/Block";
import pencil from "./images/pencil.png";
import balloon from "./images/balloon.png";
import flag from "./images/flag.png"

function App() {
  return (
    <div className="necessities">
      <h2 className="necessities__title">Что вам необходимо?</h2>
      <div className="wrapper">
        <Block title="Первый блок" image={pencil} pMark="" />
        <Block title="Второй блок" image={balloon} pMark="?" />
        <Block title="Третий блок" image={flag} pMark="!" />
      </div>
    </div>
  );
}

export default App;