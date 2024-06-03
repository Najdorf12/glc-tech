import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
/*   const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  console.log(productDetail)
  useEffect(() => {

    getProductDetail();
  }, []);
 
  const getProductDetail = () => {
    axios
      .get(`https://glctech-backend.onrender.com/api/products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((error) => console.error(error));
  }; */

  return (
    <>
      <h1>Product DETAIL</h1>
    </>
  );
};

export default ProductDetail;