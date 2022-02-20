import Button from "../Button";

export default function NewProduct({ handleToggleModal }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-lg font-semibold">Criar novo produto</h1>
        <button
          onClick={() => handleToggleModal()}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
        >
          Fechar
        </button>
      </div>

      <form className="mb-10 w-8/12" onSubmit={e => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Título
          </label>
          <input type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Preço
          </label>

          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              R$
            </span>
            <input placeholder="0,00" type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Categoria</label>
          <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>-</option>
            <option>Bebidas</option>
            <option>Pizzas</option>
            <option>Lanches</option>
            <option>Salgados</option>
            <option>Doces</option>
            <option>Outros</option>
          </select>
        </div>

        <Button type="button" onClick={() => {}}>
          Salvar
        </Button>
      </form>

    </div>
  )
}