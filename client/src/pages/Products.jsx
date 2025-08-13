import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop Pro 15",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Ultrabook Slim X",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      image:
        "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "USB-C Hub",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    },
     {
      id: 5,
      name: "USB-C Hub",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    },
     {
      id: 5,
      name: "USB-C Hub",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    },
     {
      id: 5,
      name: "USB-C Hub",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <motion.h1  
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-bold my-8 text-center"
      >
        Our Products 
      </motion.h1>

      {/* Full-width responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map(({ id, name, image }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
