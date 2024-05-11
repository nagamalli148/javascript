function getProductData() {
  fetch("https://dummyjson.com/products/1").then((response) => {
    response.json().then((data) => {
      productData = data;
      console.log("line 10:", productData);
    });
  });

  console.log("line 15: ", productData);
}
getProductData();
