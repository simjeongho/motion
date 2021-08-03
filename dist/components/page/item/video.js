import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class= "video">
        <div class="video__holder">
            <video src="" class="video__thumbnail"></video>
        </div>
        <p class="video__title"></p>
    </section>`);
        const videoElement = this.element.querySelector(`.video__thumbnail`);
        videoElement.src = url;
        const videotitle = this.element.querySelector('.video__title');
        videotitle.textContent = title;
    }
}
