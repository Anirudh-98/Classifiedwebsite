import { FileHandle } from "./file-handle";

export class Product{
  productId!: string;
  productName!: string;
  productModel!: string;
  productDescription!: string;
  productPrice!: number;
  location!: string;
  productImages!: FileHandle[];

}
