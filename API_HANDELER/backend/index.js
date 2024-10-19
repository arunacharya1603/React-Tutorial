import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      _id: "1",
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      price: 249.0,
    },
    {
      _id: "2",
      name: "iPhone 11 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      price: 599.99,
    },
    {
      _id: "3",
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      price: 929.99,
    },
    {
      _id: "4",
      name: "Sony Playstation 4 Pro White Version",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      price: 399.99,
    },
    {
      _id: "5",
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      price: 49.99,
    },
    {
      _id: "6",
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      price: 29.99,
    },
  ];

  // http://localhost:3000/api/products?search=1&sortBy=price&order=desc

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase()));
    return res.send(filterProducts);
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
