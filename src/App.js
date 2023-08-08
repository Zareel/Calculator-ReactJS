import React from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="w-full h-screen bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto h-full flex justify-center items-center">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
