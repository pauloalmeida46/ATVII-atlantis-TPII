import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('numero do RG:')
        let dataExpedicao = this.entrada.receberData('data de expedição:')
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
        this.cliente.Documentos.push(rg)
    }
}