import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; ;
`;
const Products = (cat, filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useState(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? "http://localhost:5000/api/products"
            : "http://localhost:5000/api/products"
        );
        //  console.log({ cat }, res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

console.log(filteredProducts);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
