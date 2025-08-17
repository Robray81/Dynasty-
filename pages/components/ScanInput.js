import { useState } from "react";
import axios from "axios";

export default function ScanInput({ setResults }) {
  const [query, setQuery] = useState("");

  const handleScan = async () => {
    if (!query) return alert("Enter a stock or crypto symbol");
    const res = await axios.post("/api/scan", { query });
    setResults(res.data);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter stock, crypto, or keyword..."
        className="w-full p-3 rounded-lg text-black mb-4"
      />
      <button
        onClick={handleScan}
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition"
      >
        Start Scan
      </button>
    </div>
  );
}
