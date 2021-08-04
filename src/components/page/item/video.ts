import { BaseComponent } from '../../component.js';


export class VideoComponent extends BaseComponent<HTMLElement>
{
    constructor(title: string, url: string) {
        super(`<section class= "video">
        <div class="video__player">
            <iframe class="video__iframe"></iframe>
        </div>
        <h3 class="video__title"></h3>
    </section>`);
        const iframe = this.element.querySelector(`.video__iframe`)! as HTMLVideoElement
        iframe.src = this.converToEmbededURL(url); // url -> video
        const videotitle = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        videotitle.textContent = title;
    }

    //input
    //https://www.youtube.com/watch?v=yiwCykXaqv0&t=3s
    //https://youtu.be/yiwCykXaqv0
    //output
    //https://www.youtube.com/embed/yiwCykXaqv0
    //정규 표현식 Regex
    private converToEmbededURL(url: string): string {
        const regExp = /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.?be\/?)(?:\.com\/)?(?:watch\?v\=)?(?:embed)?)([a-zA-Z0-9]{11})/;
        const match = url.match(regExp);

        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }

        return url;
    }


}

/*<iframe width="900"
height = "506"
src = "https://www.youtube.com/embed/yiwCykXaqv0"
title = "YouTube video player" frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen >
    </iframe> */

/*<iframe width="900"
height="506"
src="https://www.youtube.com/embed/X91jsJyZofw"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>*/