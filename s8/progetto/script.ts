fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(vestiti => {
        vestiti.forEach((item: Abbigliamento) => {

            let vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)

            console.log(vestiti)
        })
    })

class Abbigliamento {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {

        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo(): number {
        return Math.floor(this.prezzoivainclusa * (this.saldo / 100))
    }

    getacquistocapo(): number {
        return Math.floor(this.prezzoivainclusa - this.getsaldocapo())
    }
}

let levis= new Abbigliamento(6,1372, "inverno", "jeans",888, 26,"blue",100,122,"magazzino",20)

console.log(levis)
console.log(levis.getsaldocapo())
console.log(levis.getacquistocapo())

let ralphlauren = new Abbigliamento(7,993, "estate","polo", 1420, 10, "white",50, 61,"magazzino",50)

console.log(ralphlauren)
console.log(ralphlauren.getsaldocapo())
console.log(ralphlauren.getacquistocapo())

let tommyhilfiger = new Abbigliamento(8, 777, "autunno", "camicia",1000, 70, "light-blue" ,200, 244, "magazzino", 40 )

console.log(tommyhilfiger)
console.log(tommyhilfiger.getsaldocapo())
console.log(tommyhilfiger.getacquistocapo())