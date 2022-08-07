import AddModal from './AddModal'
export class View {
    constructor(root) {
        this.root = root
        this.init()
    }

    init() {
        this.createContainer()
        this.container = document.querySelector('.container')
        this.createAddButton()
        this.addModal = new AddModal(document.body)
    }

    createContainer() {
        const container = document.createElement('div')
        container.classList.add('container')
        this.root.appendChild(container)
    }

    createAddButton () {
        const button = document.createElement('button')
        button.classList.add('button')
        button.classList.add('add-button')
        button.innerText = 'Добавить тикет'
        this.container.appendChild(button)
    }


}
