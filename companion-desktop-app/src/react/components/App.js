import React, { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [savePath, setSavePath] = useState("");

  useEffect(() => {
    // Listen for savePath from Electron main process
    window.electronAPI.receiveSavePath((path) => {
      setSavePath(path);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          height: "33%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "0 1rem",
        }}
      >
        <Button id="btn1" label="Button 1" />
        <Button id="btn2" label="Button 2" />
        <input type="text" value={savePath} readOnly />
      </div>
    </div>
  );
}

export default App;
