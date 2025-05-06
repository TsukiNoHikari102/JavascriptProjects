export class AppController {
  constructor({ root, store }) {
    this.root  = root
    this.store = store

    // создаём контейнер для «страниц» и монтируем его в корень
    const outlet = document.createElement('div')
    outlet.id = 'outlet'
    this.root.appendChild(outlet)
  }
}