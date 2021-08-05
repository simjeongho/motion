import { BaseComponent } from '../../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
        <div class="image__holder">
            <img src="" alt="" class="image__thumbnails">
        </div>
        <p class="image__title"></p>
    </section>`);
        const imageElement = this.element.querySelector('.image__thumbnails');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image__title');
        titleElement.textContent = title;
    }
}
