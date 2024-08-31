import axios from "./axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getArsPrice = async () => {
  try {
    const response = await axios.get("/usdPrice");
    return response.data;
  } catch (error) {
    console.error("Error fetching usdPrice:", error);
  }
};
