import { ProductId } from "./value-object/product-id";
import { ProductName } from "./value-object/product-name";
import { ProductBaseUnit } from "./value-object/product-base-unit";

class Product {
    private ProductId: ProductId
    private ProductName: ProductName
    private ProductBaseUnit: ProductBaseUnit

    constructor(ProductId: ProductId, ProductName: ProductName, ProductBaseUnit: ProductBaseUnit) {
        this.ProductId = ProductId
        this.ProductName = ProductName
        this.ProductBaseUnit = ProductBaseUnit
    }

    static StaticBuild (id: string, name: string, baseUnit: string ): Product{
        const NewId = ProductId.VerifyUUID(id)
        const NewName = ProductName.VerifyName(name)
        const NewBaseUnit = ProductBaseUnit.VerifyBaseUnit(baseUnit, 'unit')
        return new Product(NewId, NewName, NewBaseUnit)
    }
}