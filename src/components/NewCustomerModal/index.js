import { useState } from "react";
import Button from "../Button"

export default function NewCustomerModal({ handleToggleModal }) {
  const [showAddressFields, setShowAddressFields] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-lg font-semibold">Criar novo cliente</h1>
        <button
          onClick={() => handleToggleModal()}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
        >
          Fechar
        </button>
      </div>

      <form className="w-8/12 mb-12">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefone</label>
          <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="mb-6">
          <label htmlFor="zipcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">CEP</label>
          <input type="text" id="zipcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {showAddressFields && (
          <>  
            <div className="mb-6">
              <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rua</label>
              <input type="text" id="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="mb-6">
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Número</label>
              <input type="text" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="mb-6">
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cidade</label>
              <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="mb-6">
              <label htmlFor="uf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UF</label>
              <input type="text" id="uf" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
          </>
        )}
        <Button type="button" onclick={() => alert('clicou')}>
          Salvar
        </Button>
      </form>
    </div>
  )
}