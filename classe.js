class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }
    exibirSaldo() {
        console.log(this.saldo)
    }
}
const andre = new Cliente("Andre", "andre@gagaga", "1231321321", 100)

console.log(andre);