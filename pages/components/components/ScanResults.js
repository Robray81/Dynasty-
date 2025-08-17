export default function ScanResults({ results }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">📊 Scan Results</h2>
      <pre className="text-gray-300 whitespace-pre-wrap">{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
