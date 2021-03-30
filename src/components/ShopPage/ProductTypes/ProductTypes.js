import ProductType from "../ProductType/ProductType";

export default function ProductTypes() {
  return (
    <section className="mb-4 product-type">
      <h6 className="font-weight-bold mb-3 text-left text-uppercase">
        Product Types
      </h6>
      <ProductType productType="blush" />
      <ProductType productType="bronzer" />
      <ProductType productType="eyebrow" />
      <ProductType productType="eyeliner" />
      <ProductType productType="eyeshadow" />
      <ProductType productType="foundation" />
      <ProductType productType="lip-liner" />
      <ProductType productType="lipstick" />
      <ProductType productType="mascara" />
      <ProductType productType="nail-polish" />
    </section>
  );
}
