import { ProductService } from "./product.service";
import { Product, ProductDocument } from "src/schema/product.schema";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(name: string, price: number, description?: string): Promise<ProductDocument>;
    findAll(): Promise<Product[]>;
}
