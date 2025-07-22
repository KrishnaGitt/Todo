import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-around my-4">
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded border ${
            filter === f ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};


export default Filter