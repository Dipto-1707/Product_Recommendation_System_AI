import React, { useState } from "react";

function PreferenceInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
      <input
        type="text"
        placeholder="I want a phone under $500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-3 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Ask AI
      </button>
    </form>
  );
}

export default PreferenceInput;
