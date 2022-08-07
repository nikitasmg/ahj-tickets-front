export default class AddModal {
    constructor(root) {
        this.root = root
        this.createModal()
    }

    createModal() {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        // modal.classList.add('active')
        modal.innerHTML = `
        <form class="add-form">
            <h2 class="modal__title">Добавить тикет</h2>
            <div class="modal__inputs">
                <label class="modal__label">
                    <span>Краткое описание</span>
                    <input class="modal__input" name="name" type="text" placeholder="Краткое описание">
                </label>
                <label class="modal__label">
                    <span>Полное описание</span>
                    <input class="modal__input" name="description" type="text" placeholder="Полное описание">
                </label>
            </div>

            <div class="modal__buttons">
                <button class="button modal__button" type="reset">Отмена</button>
                <button class="button modal__button" type="submit" >OK</button>
            </div>
        </form>        
        `
        this.root.appendChild(modal)
    }
}