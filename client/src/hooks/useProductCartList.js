import { useEffect } from "react";
import { useAsync } from "./useAsync";

import productList from "@/data/products.json";

const requestMockData = (activeShop, cartProductList) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        productList.reduce((acc, { shop, products }) => {
          if (shop === activeShop) {
            products.forEach(({ id, name, price }) => {
              if (cartProductList.includes(id)) {
                acc.push({ id, name, price });
              }
            });
          }
          return acc;
        }, [])
      );
    }, 1000)
  );
};

export function useProductCartList(shop, products) {
  const { run, status, result, error } = useAsync(() =>
    requestMockData(shop, products)
  );

  useEffect(() => {
    run();
  }, []);

  return { run, status, result, error };
}
