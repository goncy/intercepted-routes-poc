import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>All products</h1>
      <ul>
        <li>
          <Link href="/product/triangle">Triangle</Link>
        </li>
      </ul>
    </div>
  );
}
