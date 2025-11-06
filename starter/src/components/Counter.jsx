import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("default");

  const themes = {
    default: "from-indigo-700 via-purple-600 to-pink-500",
    ocean: "from-blue-500 via-teal-400 to-cyan-300",
    sunset: "from-red-500 via-orange-400 to-yellow-300",
    forest: "from-green-600 via-emerald-500 to-teal-400",
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r ${themes[theme]} p-6`}
    >
      <div className="mb-8">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/90 text-indigo-700 font-semibold"
        >
          <option value="default">Default Theme</option>
          <option value="ocean">Ocean Theme</option>
          <option value="sunset">Sunset Theme</option>
          <option value="forest">Forest Theme</option>
        </select>
      </div>

      <button
        className="px-6 py-3 bg-white/90 text-indigo-700 font-semibold rounded-lg shadow-lg hover:scale-105 transform transition gap-8"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <div className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg p-4">
        {count}
      </div>

      <button
        className="px-6 py-3 bg-white/90 text-indigo-700 font-semibold rounded-lg shadow-lg hover:scale-95 transform transition"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
