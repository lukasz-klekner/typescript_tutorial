class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

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

// interfaces
interface isPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const me: isPerson = {
  name: 'Lukasz',
  age: 27,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number) {
    console.log('I spent', amount)
    return amount
  },
}

const greetPerson = (person: isPerson) => {
  console.log(`Hello ${person.name}`)
}

greetPerson(me)
