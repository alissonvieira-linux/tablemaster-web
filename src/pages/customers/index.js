import { useState } from "react";
import Template from "../../components/Page";
import Modal from "../../components/Modal";
import NewCustomerModal from "../../components/NewCustomerModal";

const customers = [
  {
    name: 'Alisson Vieira',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Alisson Vieira',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Gabriel Duarte',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Diego Silva dos Santos',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Jennyfer Schmitd',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Alessandro Vilasboas',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Diego Silva dos Santos',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Jennyfer Schmitd',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Alessandro Vilasboas',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Diego Silva dos Santos',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Jennyfer Schmitd',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
  {
    name: 'Alessandro Vilasboas',
    phone: '(12) 98765-4321',
    address: {
      street: 'Rua dos devs',
      number: '42',
      city: 'São José dos Campos',
      uf: 'SP',
    }
  },
]

export default function Tables() {
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);

  function handleToggleAddCustomerModal() {
    setIsCustomerModalOpen(prevState => !prevState);
  }

  return (
    <Template>
      <Modal 
        isOpen={isCustomerModalOpen}
        handleToggleModal={handleToggleAddCustomerModal}
      >
        <NewCustomerModal handleToggleModal={handleToggleAddCustomerModal} />
      </Modal>

      <div className="py-8 px-8 flex flex-1 flex-col">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-700">
            Clientes
          </h2>

          <button
            onClick={handleToggleAddCustomerModal} 
            type="button" 
            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            Adicionar
          </button>
        </div>

        <table className="min-w-full mt-5 mb-10">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400">
                Nome
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400">
                Telefone
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400">
                Endereço
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400">
                Cidade/Estado
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">       
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {customer.name}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {customer.phone}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {`${customer.address.street}, ${customer.address.number}`}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {customer.address.uf}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </Template>
  );
}