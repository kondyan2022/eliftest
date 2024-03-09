import { useEffect } from "react";
import { useAsync } from "./useAsync";

import listShop from "@/data/shops.json";

const requestMockData = (data) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
};

export function useShop() {
  const { run, status, result, error } = useAsync(() =>
    requestMockData(listShop)
  );

  //   console.log(run);
  useEffect(() => {
    run();
  }, []);

  return { run, status, result, error };
}
