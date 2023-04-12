import Image from "next/image";
import Link from "next/link";

import api from "@/api";

export default async function ProductInterceptedPage({params: {id}}: {params: {id: string}}) {
  const product = await api.product.fetch(id);

  return (
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div key={product!.id} className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
        <a href={`/product/${product!.id}`}>
          <button
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            type="button"
          >
            See more
          </button>
        </a>
        <Link href="/">
          <button
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            type="button"
          >
            Close
          </button>
        </Link>
      </div>
    </div>
  );
}
