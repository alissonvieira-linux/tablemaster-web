import Template from "../../components/Page";
import TableCard from "../../components/TableCard";

const tables = [
  {
    id: 1,
    title: 'Mesa 1',
    status: 'available',
  },
  {
    id: 2,
    title: 'Mesa 2',
    status: 'unavailable',
  },
  {
    id: 3,
    title: 'Mesa 3',
    status: 'available',
  },
  {
    id: 4,
    title: 'Mesa 4',
    status: 'unavailable',
  },
  {
    id: 5,
    title: 'Mesa 5',
    status: 'unavailable',
  },
]

export default function Tables() {
  return (
    <Template>
      <div className="py-8 px-8 flex flex-1 flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-gray-700">
            Mesas
          </h2>

          <button
            onClick={() => {}} 
            type="button" 
            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            Adicionar mesa
          </button>
        </div>

        <div className="pb-6">
          <div className="grid grid-cols-3 gap-4">
            {tables.map(table => (
              <TableCard key={table.id} data={table} />
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
}