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
      const newValue = prevValue.map(({ shop, products }) => ({
        shop,
        products: [...products],
      }));

      const cartShopItem = newValue.find(({ shop }) => activeShop === shop);
      if (cartShopItem) {
        const productItem = cartShopItem.products.find(
          ({ product }) => product === id
        );
        if (productItem) {
          productItem.qty += 1;
        } else {
          cartShopItem.products.push({ product: id, qty: 1 });
        }
        return newValue;
      }

      newValue.push({ shop: activeShop, products: [{ product: id, qty: 1 }] });
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
