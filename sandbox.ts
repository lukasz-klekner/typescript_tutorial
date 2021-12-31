class Invoice {
  client: string
  details: string
  amount: number

  constructor(c: string, d: string, a: number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    console.log(`${this.client} owes ${this.amount} for ${this.details}`)
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('mario', 'work on the mario website', 300)

const invoices: Invoice[] = []
invoices.push(invOne, invTwo)
console.log(invoices)

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLFormElement
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})
