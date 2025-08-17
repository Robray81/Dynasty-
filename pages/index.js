import Head from "next/head";
import { useState } from "react";
import ScanInput from "../components/ScanInput";
import ScanResults from "../components/ScanResults";

export default function Home() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <Head>
        <title>Dynasty Wealth Engine</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-6">🏛️ Dynasty Wealth Engine</h1>
      <ScanInput setResults={setResults} />
      {results && <ScanResults results={results} />}
    </div>
  );
}
