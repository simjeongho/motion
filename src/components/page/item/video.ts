import { BaseComponent } from '../../component.js';


export class VideoComponent extends BaseComponent<HTMLElement>
{
    constructor(title: string, url: string) {
        super(`<section class= "video">
        <div class="video__holder">
            <video src="" class="video__thumbnail"></video>
        </div>
        <p class="video__title"></p>
    </section>`);
        const videoElement = this.element.querySelector(`.video__thumbnail`)! as HTMLVideoElement
        videoElement.src = url;

        const videotitle = this.element.querySelector('.video__title')! as HTMLParagraphElement;
        videotitle.textContent = title;
    }


}