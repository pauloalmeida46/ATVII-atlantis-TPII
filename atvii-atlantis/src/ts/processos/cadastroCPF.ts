import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroCPF extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('numero do CPF:')
        let dataExpedicao = this.entrada.receberData('data de expedicao:')
        let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
        this.cliente.Documentos.push(cpf)
    }
}