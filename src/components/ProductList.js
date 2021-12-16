import React, { useEffect, useState } from "react";
import { deleteProductById, getProducts } from "../services/products";
import { Card, Button, Image } from "semantic-ui-react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const handleDelete = (id) => {
    deleteProductById(id);
    setProducts(products.filter((item) => item.id !== id));
  };
  if (products && products.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Card.Group>
      {products.map((product) => (
        <Card>
          <Image src={product.image} size="medium"></Image>
          <Card.Header> Product name: {product.name}</Card.Header>
          <Card.Meta>Price: ${product.price}</Card.Meta>
          <Button onClick={() => handleDelete(product.id)}>Delete</Button>
        </Card>
      ))}
    </Card.Group>
  );
};
export default ProductList;
