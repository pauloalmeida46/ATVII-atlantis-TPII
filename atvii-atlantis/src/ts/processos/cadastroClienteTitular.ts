import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('nome do cliente:')
        let nomeSocial = this.entrada.receberTexto('nome social')
        let dataNascimento = this.entrada.receberData('data de nascimento:')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}