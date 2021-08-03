export class imageComponent {
    constructor() {
        this.element = document.createElement('img');
        this.element.setAttribute('class', 'image');
        this.element.setAttribute('src', '../assets/kotlin.jpeg');
        this.element.setAttribute('alt', 'this is image');
        this.element.textContent = 'this is image component';
    }
}
