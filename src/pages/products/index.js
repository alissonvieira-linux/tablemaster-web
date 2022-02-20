import { useState } from "react";
import Template from "../../components/Page";
import Modal from "../../components/Modal";
import NewProduct from "../../components/NewProduct";

export default function Tables() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  function handleToggleAddProductModal() {
    setIsProductModalOpen(prevState => !prevState);
  }

  return (
    <Template>
      <Modal 
        isOpen={isProductModalOpen}
        handleToggleModal={handleToggleAddProductModal}
      >
        <NewProduct handleToggleModal={handleToggleAddProductModal} />
      </Modal>

      <div className="py-8 px-8 flex flex-1 flex-col">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-700">
            Produtos
          </h2>

          <button
            onClick={handleToggleAddProductModal} 
            type="button" 
            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            Novo produto
          </button>
        </div>

      </div>
    </Template>
  );
}