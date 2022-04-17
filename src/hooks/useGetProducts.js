import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchData() {
		  // You can await here
		  const response = await axios(API);
		  const filteredProducts = response.data.filter(product => {
			  return product.images.length > 0;
		  })
		  setProducts(filteredProducts);
		}
		fetchData();
	  }, []); // Or [] if effect doesn't need props or state

	  return products;
};

export default useGetProducts;
