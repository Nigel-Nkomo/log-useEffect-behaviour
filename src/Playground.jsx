import { useEffect, useState } from "react";

export default function Playground() {
  const [text, setText] = useState("🧬 DNA");

  useEffect(() => {
    function onTimeout() {
      console.log(`⏰ ${text}`);
    }

    console.log(`🟢 Schedule ${text} log`);

    {
      /*
    setTimeout returns a timeoutID which is a positive integer that identifies the timer created when setTimeout() is called. This value can be passed to clearTimeout() to cancel the timeout.
*/
    }
    const timeoutId = setTimeout(() => onTimeout(), 3000);

    return () => {
      console.log(`🔴 Cancel ${text} log`);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      {/* 
        Input placed within label for accessibility.
        When the user focuses on the input, the screen reader will announce the associated label text
         */}
      <label>
        What to log:{" "}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}
