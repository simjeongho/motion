export class ImageComponent {
    private element: HTMLElement;
    constructor(title: string, urls: string) {
        const template = document.createElement('template');
        template.innerHTML = `<section class="image">
        <div class="image__holder">
            <img src="" alt="" class="image__thumbnails">
        </div>
        <p class="image__title"></p>
    </section>`; //HTML요소를 입력해주고

        this.element = template.content.firstElementChild! as HTMLElement;//this에 할당해주고

        const imageElement = this.element.querySelector('.image__thumbnails')! as HTMLImageElement;
        imageElement.src = urls;
        imageElement.alt = title; // 각각의 속성들을 정의해준다. 

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element)
    }
}