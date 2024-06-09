import { ProductType } from "./ProductType";

export default interface CartInterface extends ProductType {
  count: number;
}
