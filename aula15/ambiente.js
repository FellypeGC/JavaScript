let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num )
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
