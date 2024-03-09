import { useEffect } from "react";
import { useAsync } from "./useAsync";

import productList from "@/data/products.json";

const requestMockData = (data, id) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (!id) {
        resolve([]);
      } else {
        resolve([...data.filter(({ shop }) => shop === id)[0].products]);
      }
    }, 1000)
  );
};

export function useProducts(shopId) {
  const { run, status, result, error } = useAsync(() =>
    requestMockData(productList, shopId)
  );

  useEffect(() => {
    run();
  }, [shopId]);

  return { run, status, result, error };
}
