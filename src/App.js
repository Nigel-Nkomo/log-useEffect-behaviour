import { useState } from "react";
import Playground from "./Playground";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"}
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}

export default App;
