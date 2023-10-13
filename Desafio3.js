

class heroi {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
        this.list = ["mago", " guerreiro", " monge", " ninja"]
        this.ataquesGuerreiro = [ " ", " Corte de espada", " Giro de espada" , " Investida Afiada"]
        this.ataquesMago = [ " ", " Bola de fogo", " Congelamento" , " Chuva acida"]
        this.ataquesNinja = [ " ", " Shuriken", " Sais" , " Kunay"]
        this.ataquesMonge = [ " ", " Cruzados", " Chute Giratorio" , " Dempsey Roll"]
    }

    classe(){
        console.log(`A classe escolhida foi ${this.type}`)
    }


    instrucoes(){
        console.log(`Ola ${this.name}, Você tem as seguintes classes disponiveis : ${this.list}`)
    }
    
    classeGuerrueiro(){
        console.log(`Sua lista de ataques são ${this.ataquesGuerreiro}`)
        console.log(`O ${this.type} usou o ataque ${this.ataquesGuerreiro[2]}`)
    }

    classeMago(){
        console.log(`Sua lista de ataques são ${this.ataquesMago}`)
        console.log(`O ${this.type} usou o ataque ${this.ataquesMago[2]}`)
    }

    classeMonge(){
        console.log(`Sua lista de ataques são ${this.ataquesMonge}`)
        console.log(`O ${this.type} usou o ataque ${this.ataquesMonge[2]}`)


    } 

    classeNinja(){
        console.log(`Sua lista de ataques são ${this.ataquesNinja}`)
        console.log(`O ${this.type} usou o ataque ${this.ataquesNinja[2]}`)


    } 
}


let teste = new heroi("Vinny", 17, "guerreiro")
teste.instrucoes()
teste.classe()
teste.classeNinja()