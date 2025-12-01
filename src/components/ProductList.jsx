
export const products = [
  // Smartphones
  { name: "iPhone 14", price: "$799" },
  { name: "Samsung S21", price: "$699" },
  { name: "OnePlus Nord", price: "$349" },
  { name: "Google Pixel 7", price: "$599" },
  { name: "Realme 9", price: "$199" },

  // Laptops
  { name: "MacBook Air M2", price: "$1199" },
  { name: "Dell XPS 13", price: "$999" },
  { name: "HP Pavilion 15", price: "$749" },
  { name: "Lenovo IdeaPad 3", price: "$499" },
  { name: "Asus ROG Strix G15", price: "$1499" },

  // Smartwatches
  { name: "Apple Watch Series 9", price: "$399" },
  { name: "Samsung Galaxy Watch 6", price: "$349" },
  { name: "Fitbit Versa 4", price: "$229" },
  { name: "Amazfit GTR 4", price: "$199" },

  // Headphones / Earbuds
  { name: "AirPods Pro 2", price: "$249" },
  { name: "Sony WH-1000XM5", price: "$399" },
  { name: "BoAt Airdopes 441", price: "$49" },
  { name: "JBL Tune 760NC", price: "$129" },

  // Tablets
  { name: "iPad 10th Gen", price: "$449" },
  { name: "Samsung Galaxy Tab S8", price: "$699" },
];



export default function ProductList() {
  return (
    <div className="mt-8 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Available Products
      </h2>

      <div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="text-gray-600 mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
