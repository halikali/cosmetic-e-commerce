import "./style.scss";

export default function ProductType({ productType, onClick, count }) {
  return (
    <div className="form-check pl-0 mb-3 text-left">
      <div className="cursor">
        <p className="text-uppercase" onClick={onClick}>
          {productType} {count && `(${count})`}
        </p>
      </div>
    </div>
  );
}
