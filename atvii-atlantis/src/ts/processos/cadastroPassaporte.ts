import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroPassaporte extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('número do Passaporte:')
        let dataExpedicao = this.entrada.receberData('data de expedição:')
        let passaporte = new Documento(numero, TipoDocumento.Passaporte, dataExpedicao)
        this.cliente.Documentos.push(passaporte)
    }
}