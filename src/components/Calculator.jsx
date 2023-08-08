import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const onClick = (e) => {
    setValue(value + e.target.value);
  };

  const allClear = () => {
    setValue("");
  };

  return (
    <div className="w-full h-full px-4 py-10 flex justify-center items-center">
      <div className="w-[450px] h-[550px] bg-black rounded-xl flex flex-col justify-center items-center ">
        <form
          className="pb-10 flex justify-center items-center gap-4"
          action=""
        >
          <input
            className="w-[280px] py-2 px-2 rounded-md text-black text-xl font-semibold"
            type="text"
            placeholder="0.00"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={allClear}
            className="bg-gray-200 text-black px-8 py-2 rounded-md text-xl font-semibold"
          >
            Clear
          </button>
        </form>
        <div className="text-black grid grid-cols-3 gap-4 px-10">
          <input
            className="py-2 rounded-md text-center text-lg font-semibold bg-yellow-600 text-white cursor-poiner"
            type="text"
            value="+"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold col-span-2  bg-yellow-600 text-white cursor-pointer"
            type="text"
            value="="
            onClick={(e) => setValue(eval(value))}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold  bg-yellow-600 text-white cursor-pointer"
            type="text"
            value="*"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold  bg-yellow-600 text-white cursor-pointer"
            type="text"
            value="-"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold  bg-yellow-600 text-white cursor-pointer"
            type="text"
            value="/"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="1"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="2"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="3"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="4"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="5"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="6"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="7"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="8"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold cursor-pointer"
            type="text"
            value="9"
            onClick={onClick}
          />
          <input
            className="py-2 rounded-md text-center text-lg font-semibold col-span-3 cursor-pointer"
            type="text"
            value="0"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
