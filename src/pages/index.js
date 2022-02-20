import Template from "../components/Page";

export default function Home() {
  return (
    <Template>
      <div className="flex flex-1 flex-col justify-center items-center text-gray-700">
        <h2 className="text-lg font-semibold ">
          Ainda não temos nada por aqui
        </h2>

        <p className="font-light">Selecione um dos módulos para começar a trabalhar {':)'}</p>
      </div>

    </Template>
  );
}

