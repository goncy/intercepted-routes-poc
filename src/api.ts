const PRODUCTS = [
  {
    id: "black",
    title: "Basic Black Tee",
    price: "$35",
    color: "Black",
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: "white",
    title: "Basic White Tee",
    price: "$35",
    color: "White",
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
  {
    id: "gray",
    title: "Basic Gray Tee",
    price: "$35",
    color: "Gray",
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
  {
    id: "pink",
    title: "Basic Pink Tee",
    price: "$35",
    color: "Pink",
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
  },
];

const api = {
  product: {
    list: () => Promise.resolve(PRODUCTS),
    fetch: (id: string) => Promise.resolve(PRODUCTS.find((p) => p.id === id)),
  },
};

export default api;
