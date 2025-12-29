"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1>Prototype Practice</h1>
      {submitted ? (
        <p>You entered: {input}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: "8px", fontSize: "16px", width: "250px" }}
            required
          />
          <button
            type="submit"
            style={{ marginLeft: "10px", padding: "8px 16px", fontSize: "16px" }}
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
