interface HasFormatting {
  format(): string
}

class Invoice implements HasFormatting {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

class Payment implements HasFormatting {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} owes ${this.amount} for ${this.details}`
  }
}

class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatting, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li')

    const h4 = document.createElement('h4')
    h4.innerText = heading
    li.append(h4)

    const p = document.createElement('p')
    p.innerText = item.format()
    li.append(p)

    if (pos === 'start') {
      this.container.prepend(li)
    } else {
      this.container.append(li)
    }
  }
}

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLFormElement
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('.item-list') as HTMLUListElement
console.log(ul)
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  let docs: HasFormatting

  if (type.value === 'invoice') {
    docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    docs = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(docs, type.value, 'end')
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
