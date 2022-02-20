import { useState, useEffect } from "react"

export default function TableCard({ data }) {
  const [isAvailable, setIsAvailable] = useState(false);

  function handleToggleTableStatus() {
    setIsAvailable(prevState => !prevState);
  }

  useEffect(() => {
    if (data.status === 'available') {
      setIsAvailable(true);
      return;
    }

    if (data.status === 'unavailable') {
      setIsAvailable(false);
      return;
    }
  }, [data.status]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col items-center p-5">
        <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{data.title}</h3>
        <div className="flex mt-4 space-x-3">
          {isAvailable ? (
            <button onClick={handleToggleTableStatus} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-green-600 bg-white border border-green-300 rounded-lg hover:bg-green-300">Disponível</button>
          ) : (
            <button onClick={handleToggleTableStatus} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-red-600 bg-white border border-red-300 rounded-lg hover:bg-red-300">Ocupada</button>
          )}
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-300">Pedido</button>
        </div>
      </div>
    </div>
  )
}