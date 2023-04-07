import Image from "next/image";
import Link from "next/link";

import api from "@/api";

export default async function ProductInterceptedPage({params: {id}}: {params: {id: string}}) {
  const product = await api.product.fetch(id);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Link className="text-lg text-gray-900" href="/">
          ← Go back
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product details</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div key={product!.id} className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                alt={product!.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                height={320}
                src={product!.image}
                width={280}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href={`/product/${product!.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product!.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product!.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product!.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
