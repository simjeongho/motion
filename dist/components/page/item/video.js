import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class= "video">
        <div class="video__player">
            <iframe class="video__iframe"></iframe>
        </div>
        <h3 class="video__title"></h3>
    </section>`);
        const iframe = this.element.querySelector(`.video__iframe`);
        iframe.src = this.converToEmbededURL(url);
        const videotitle = this.element.querySelector('.video__title');
        videotitle.textContent = title;
    }
    converToEmbededURL(url) {
        const regExp = /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.?be\/?)(?:\.com\/)?(?:watch\?v\=)?(?:embed)?)([a-zA-Z0-9]{11})/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
