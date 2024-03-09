import { useSearchParams } from "react-router-dom";
import { useShop } from "../../hooks/useShop";
import { useEffect, useRef, useState } from "react";
// import ButtonShop from "../ButtonShop/ButtonShop";

function ShopList() {
  const { status, result, error } = useShop();
  const [activeShop, setActiveShop] = useState();
  const [, setSearchParams] = useSearchParams();
  const firstGetData = useRef(false);

  useEffect(() => {
    if (firstGetData.current) {
      return;
    }
    if (result?.length > 0) {
      firstGetData.current = true;
      setActiveShop(result[0].id);
    }
  }, [result]);

  useEffect(() => {
    if (activeShop) {
      setSearchParams({ shop: activeShop });
    }
  }, [activeShop, setSearchParams]);

  const setActive = (id) => {
    setActiveShop(id);
  };

  return (
    <>
      <div>Shop</div>
      <ul>
        {result?.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => setActive(id)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShopList;
