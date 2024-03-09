import Container from "@/components/Container/Container";
import { ProductList } from "@/components/ProductList/ProductList";
import ShopList from "../../components/ShopList/ShopList";

function Shop() {
  return (
    <section>
      <Container>
        <ShopList />
        <ProductList />
      </Container>
    </section>
  );
}

export default Shop;
