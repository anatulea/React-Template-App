import axios from "axios";

const productsBaseURl = "http://localhost/api/products/";

export const getProducts = () => {
  return axios
    .get(productsBaseURl)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteProductById = (product_id) => {
  return axios.delete(`${productsBaseURl}${product_id}`);
};
