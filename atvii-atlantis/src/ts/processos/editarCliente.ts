import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class EdicaoCliente extends Processo {
    constructor() {
        super();
    }

    processar(): void {
        console.clear();
        console.log("Iniciando a edição de cliente...");

        const armazem = Armazem.InstanciaUnica;
        const clientes = armazem.Clientes;

        console.log("Selecione o cliente que deseja editar:");
        clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.Nome} (${cliente.Titular ? 'Dependente' : 'Titular'})`);
        });

        const clienteIndex = this.entrada.receberNumero('Digite o número do cliente:') - 1;

        if (clienteIndex >= 0 && clienteIndex < clientes.length) {
            const cliente = clientes[clienteIndex];

            console.log(`Editando informações de ${cliente.Nome}...`);

            console.log("Selecione um para editar:");
            console.log("1 - Nome");
            console.log("2 - Nome Social");
            console.log("3 - Data de Nascimento");
            console.log("0 - Cancelar");

            const opcaoEdicao = this.entrada.receberNumero("Selecione uma opção:");

            switch (opcaoEdicao) {
                case 1:
                    cliente.Nome = this.entrada.receberTexto("nome novo:");
                    console.log("nome atualizado com sucesso!");
                    break;
                case 2:
                    cliente.NomeSocial = this.entrada.receberTexto("nome social novo:");
                    console.log("nome social atualizado com sucesso!");
                    break;
                case 3:
                    cliente.DataNascimento = this.entrada.receberData("data de nascimento nova:");
                    console.log("data de nascimento atualizada com sucesso!");
                    break;
                case 0:
                    console.log("Edição cancelada.");
                    break;
                default:
                    console.log("Opção inválida.");
            }
        } else {
            console.log("Cliente inválido.");
        }
    }
}
