import Link from 'next/link';

export default function PageTemplate({ children }) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg flex" style={{ minHeight: 500, maxHeight: 500 }}>
          
          {/* List module options */}
          <div className="w-2/12 bg-gray-200 bg-opacity-25 border-r border-gray-200">
            <ul>
              <li className="p-6 text-lg text-gray-600 leading-7 font-semibold border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
                <Link href="/tables">
                  <a className="flex-1">Mesas</a>
                </Link>
              </li>
              <li className="p-6 text-lg text-gray-600 leading-7 font-semibold border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
                <Link href="/orders">
                  <a className="flex-1">Pedidos</a>
                </Link>
              </li>
              <li className="p-6 text-lg text-gray-600 leading-7 font-semibold border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
                <Link href="/products">
                  <a className="flex-1">Produtos</a>
                </Link>
              </li>
              <li className="p-6 text-lg text-gray-600 leading-7 font-semibold border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
                <Link href="/financial">
                  <a className="flex-1">Caixa</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-1 overflow-scroll overflow-x-hidden">
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}