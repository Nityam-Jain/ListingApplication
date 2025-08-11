export default function Products() {
  // Sample product data — you can replace or fetch this from your backend
  const products = [
    {
      id: 1,
      name: "Gaming Laptop Pro 15",
      description: "High performance laptop with RTX 3060, 16GB RAM, 512GB SSD.",
      price: "₹85,000",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Ultrabook Slim X",
      description: "Lightweight laptop perfect for travel and office work.",
      price: "₹65,000",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    // {
    //   id: 3,
    //   name: "Wireless Mouse",
    //   description: "Ergonomic wireless mouse compatible with all laptops.",
    //   price: "₹900",
    //   image:
    //     "https://images.unsplash.com/photo-1580910051073-812d18759bc8?auto=format&fit=crop&w=400&q=80",
    // },
    {
      id: 4,
      name: "Laptop Backpack",
      description: "Durable and spacious backpack for laptops up to 17 inches.",
      price: "₹3,000",
      image:
        "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "USB-C Hub",
      description: "Expand your laptop connectivity with multiple ports.",
      price: "₹2,500",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Laptop Shop Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map(({ id, name, description, price, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-green-600 font-bold text-lg">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
