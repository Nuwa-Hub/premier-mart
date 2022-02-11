import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const hadleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
console.log(cat);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={hadleFilters}>
            <Option disabled>color</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>green</Option>
            <Option>white</Option>
            <Option>black</Option>
          </Select>
          <Select name="size" onChange={hadleFilters}>
            <Option disabled>size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value=""newest>Newest</Option>
            <Option value="ace">Price(asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
