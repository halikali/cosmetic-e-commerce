export default function ProductType({ productType }) {
  return (
    <div class="form-check pl-0 mb-3 text-left">
      <input
        type="checkbox"
        className="form-check-input filled-in"
        id={productType}
      />
      <label
        className="form-check-label small text-uppercase card-link-secondary"
        htmlFor={productType}
      >
        {productType}
      </label>
    </div>
  );
}
