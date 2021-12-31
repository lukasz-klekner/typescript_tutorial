interface HasFormatting {
  format(a: string): void
}

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

class Payment {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    console.log(`${this.recipient} owes ${this.amount} for ${this.details}`)
  }
}

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLFormElement
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  let docs: HasFormatting

  if (type.value === 'invoice') {
    docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    docs = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  console.log(docs)
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
