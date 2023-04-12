export default function ProductInterceptedLayout({children}: {children: React.ReactNode}) {
  return (
    <div aria-labelledby="modal-title" aria-modal="true" className="relative z-10" role="dialog">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {children}
        </div>
      </div>
    </div>
  );
}
