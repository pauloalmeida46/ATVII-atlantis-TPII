import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class CadastroClienteDependente extends Processo {
    private titular!: Cliente;

    constructor() {
        super();
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...');
        
        const armazem = Armazem.InstanciaUnica;
        const clientes = armazem.Clientes;

        console.log('Selecione o titular para o dependente:');
        clientes.forEach((cliente, index) => {
            if (cliente.Titular === undefined) {
                console.log(`${index + 1} - ${cliente.Nome}`);
            }
        });

        const titularIndex = this.entrada.receberNumero('Digite o número do titular desejado:') - 1;
        if (titularIndex >= 0 && titularIndex < clientes.length && clientes[titularIndex].Titular === undefined) {
            this.titular = clientes[titularIndex];
        } else {
            console.log('Titular inválido.');
            return;
        }

        const nome = this.entrada.receberTexto('nome do dependente:');
        const nomeSocial = this.entrada.receberTexto('nome social:');
        const dataNascimento = this.entrada.receberData('data de nascimento:');
        const dependente = new Cliente(nome, nomeSocial, dataNascimento);

        dependente.Titular = this.titular;
        this.titular.Dependentes.push(dependente);

        console.log(`Dependente ${dependente.Nome} cadastrado com sucesso!`);
    }
}
