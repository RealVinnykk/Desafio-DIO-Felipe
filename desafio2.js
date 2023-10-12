

//contexto, o seu rank foi avaliado e será repassado para você no fim de uma temporada
// juntamente do seu novo rank
//const readline = require('readline').createInterface({
   // input:process.stdin,
//    output:process.stdout
//})

let vitorias = 50
//readline.question("Quantidade de vitorias?\n", win => {
   // vitorias = win
   // readline.close();
//})
let derrotas = 0
let medalhas = ""
let rank = ""
let skinExclusiva = false
let elegivelGLobal = false
let elegivelCampeonatos = false

let partidas = vitorias - derrotas


if (partidas <= 10) {
    rank = "Ferro"
    console.log("O herói tem o saldo de vitorias menor que 10, por isso está no ranking " + rank)
}

if (partidas >= 11 && partidas <= 20 ) {
    rank = "Bronze"
    console.log("Seu herói tem " + partidas + " vitorias e está no rank " + rank)
}

if (partidas >= 21 && partidas <= 50) {
    rank = "Prata"
    console.log("Seu herói tem " + partidas + " vitorias e está no rank " + rank)
}

if (partidas >= 51 && partidas <= 80) {
    rank = "Ouro"
    console.log("Seu herói tem " + partidas + " vitorias e está no rank " + rank)
    console.log("Por conta do seu avanço, você recebeu uma medalha")
    medalhas = "Medalha de Ouro"
}

if (partidas >= 81 && partidas <= 90) {
    rank = "Diamante"
    skinExclusiva = true
    console.log("Seu herói tem " + partidas + " vitorias e esta no rank " + rank)
    console.log("Devido seu avanço, você recebeu uma skin exclusiva")
}

if (partidas >= 91 && partidas <= 100) {
    rank = "Lendário"
    elegivelCampeonatos = true
    console.log("Seu herói tem " + partidas + " vitorias e esta no rank " + rank)
    console.log("Seu herói agora tem o status de elegivel para campeonatos como : " + elegivelCampeonatos)
}

if (partidas >= 101) {
    elegivelGLobal = true
    rank = "Imortal"
    console.log("Você se tornou um campeão, pois seu heroi agora tem " + partidas + " vitorias e atingiu o rank de " + rank)
    console.log("Agora seu NickName será exibido globalmente em ranks exclusivos pois seu status global agora é : " + elegivelGLobal)
}

// para uma nova temporada 

if (rank == "Ferro") {
    console.log("Uma nova temporada foi iniciada e seu rank não mudou")
}
if (rank == "Bronze") {
    console.log("Uma nova temporada foi iniciada e seu rank não mudou")
}

if (rank == "Prata") {
    console.log("Uma nova temporada foi iniciada e seu rank não mudou")
}

if (rank == "Ouro") {
    partidas - 40
    console.log("Uma nova temporada foi iniciada e seu rank mudou para " + rank)
}

if (rank == "Diamante") {
    partidas - 20
    console.log("Uma nova temporada foi iniciada e seu rank mudou para " + rank)
}

if (rank == "Lendário") {
    partidas - 20
    console.log("Uma nova temporada foi iniciada e seu rank mudou para " + rank)
}

if (rank == "Imortal") {
    partidas - 35
    console.log("Uma nova temporada foi iniciada e seu rank mudou para " + rank)
}

