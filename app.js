/**
 * Digital house
 * Exercicio cine house
 */

const filmes = require('./database/db.json')

function listarFilmes() {
  return filmes.map(filme => filme.Title + ' - ' + filme.Runtime)
}

function buscarFilmePeloTitulo(titulo) {
  let filme = filmes.filter(filme => filme.Title === titulo)
  return filme.length > 0 ? filme[0] : {}
}

function listarFilmesEmCartaz() {
  return filmes.filter(filme => filme.onDisplay)
}

function incluirFilme(filme) {
  console.log(filme)
  return filmes.push(filme)
}

function identificarPosicaoFilme(titulo) {
  return filmes.findIndex(
    filme => filme.Title === buscarFilmePeloTitulo(titulo).Title
  )
}

function eliminarFilme(posicaoFilme) {
  return filmes.splice(posicaoFilme, 1)
}

console.log('Todos os filmes')
console.log(listarFilmes())

console.log('Busca do filme por nome')
console.log(buscarFilmePeloTitulo('Hulk'))

console.log('Filmes em cartaz')
console.log(listarFilmesEmCartaz())

console.log('Incluindo novo filme')
let novoFilme = {
  Title: 'The Avengers',
  Year: 2012,
  Runtime: 143,
  Genre: ['Action', 'Adventure', 'Sci-Fi'],
  Actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
  onDisplay: false
}
incluirFilme(novoFilme)
console.log(filmes)

console.log('Posicao do filme')
let posicaoFilme = identificarPosicaoFilme('Hulk')
console.log(posicaoFilme)

console.log('Eliminando um filme: ', filmes.length)
eliminarFilme(posicaoFilme)
console.log(filmes)
console.log('Tamanho db: ', filmes.length)
