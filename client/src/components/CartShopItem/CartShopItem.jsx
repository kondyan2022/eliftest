/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { useProductCartList } from "../../hooks/useProductCartList";
import ProductItem from "../ProductItem/ProductItem";

function CartShopItem({ children, shop, products, setCartList }) {
  const { run, status, result, error } = useProductCartList(
    shop,
    products.map(({ product }) => product)
  );

  const finalList = products
    .map(({ product, qty }) => ({
      ...result?.find(({ id }) => product === id),
      qty,
    }))
    .map((item) => ({ ...item, sum: item.qty * item.price }));

  const changeValue = (productId, newQty) => {
    setCartList((prevValue) => {
      const newValue = prevValue.map(({ shop, products }) => ({
        shop,
        products: [...products],
      }));

      const cartShopItem = newValue.find(
        ({ shop: currentShop }) => currentShop === shop
      );
      if (cartShopItem) {
        const productItem = cartShopItem.products.find(
          ({ product }) => product === productId
        );
        if (productItem) {
          productItem.qty = newQty;
        }
        return newValue;
      }
    });
  };

  return (
    <div>
      CartShopItem {status}
      <ul>
        {status === "success" &&
          finalList.map((item) => (
            <li key={item.id}>
              <ProductItem {...item}>
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={(event) => changeValue(item.id, event.target.value)}
                />
                {children}
              </ProductItem>
            </li>
          ))}
      </ul>
    </div>
  );
}

CartShopItem.propTypes = {};

export default CartShopItem;
