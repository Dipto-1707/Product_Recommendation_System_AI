export default function RecommendationBox({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        AI Recommendations
      </h3>

      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-gray-100 transition shadow-sm"
          >
            <span className="text-gray-900 font-medium">{item.name}</span>
            <span className="text-gray-600 ml-2">— {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
