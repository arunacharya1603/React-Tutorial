import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // const [products, error, loading] = custReactQuery("/api/products");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // EEF -> Immediately Evoked Function vo function jo call ho jaye turant hi khud nai ho to koi function ki call ho
    // fetch data from server
// To avoid race condition -> jab user search karta hai toh uska previous request cancel ho jayega
    const controller = new AbortController();

    ;(async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log("Request cancelled");
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

// cleanup function -> jab bhi component unmount ho raha ho toh ye function call hoga
    return () => {
      controller.abort();
    }

  }, [search]);

  return (
    <>
      <h1>Hello React + API Tutorial!</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}
      {error && <h2>Error occurred while fetching data from server</h2>}

      <h2>Number of products are: {products.length}</h2>
    </>
  );
}

export default App;
