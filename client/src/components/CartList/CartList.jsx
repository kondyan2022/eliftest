import { useMemo } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import CartShopItem from "../CartShopItem/CartShopItem";

function CartList() {
  const [cartList, setCartList] = useLocalStorage("cart", []);

  return (
    <div>
      CartList
      <ul>
        {cartList.map(({ shop, products }) => (
          <li key={`${shop}`}>
            <CartShopItem
              shop={shop}
              products={products}
              setCartList={setCartList}
            ></CartShopItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
