const PRODUCT = {
  name: "triangle",
};

export default function ProductInterceptedPage() {
  return (
    <div>
      <h1>{PRODUCT.name}</h1>
      <span>This is an intercepted route</span>
    </div>
  );
}
