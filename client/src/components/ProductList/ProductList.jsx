// import PropTypes from "prop-types";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function ProductList() {
  const [searchParams] = useSearchParams();
  const activeShop = searchParams.get("shop");
  const { status, result, error } = useProducts(activeShop);
  const [cart, setCart] = useLocalStorage("cart", []);

  useEffect(() => {
    console.log({ activeShop: searchParams.get("shop") });
  }, [searchParams]);

  const AddCart = (id) => {
    setCart((prevValue) => {
      let flag;
      const newValue = prevValue.map(({ shop, product, qty }) => {
        if (shop === activeShop && product === id) {
          flag = 1;
          return { shop, product, qty: (qty += 1) };
        }
        return { shop, product, qty };
      });
      if (!flag) {
        newValue.push({ shop: activeShop, product: id, qty: 1 });
      }
      return newValue;
    });
  };

  return (
    <div>
      ProductsList
      <ul>
        {result?.map(({ id, name, price }) => (
          <li key={id}>
            <ProductItem id={id} name={name} price={price}>
              <button type="button" onClick={() => AddCart(id)}>
                Add to cart
              </button>
            </ProductItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
