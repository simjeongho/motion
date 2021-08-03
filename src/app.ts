import { imageComponent } from './components/image.js';
import { PageComponent } from './components/page.js';

class App {
    private readonly page: PageComponent
    private readonly image: imageComponent
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.image = new imageComponent();
        this.page.attachTo(appRoot);
    }
}

new App(document.querySelector('.document')! as HTMLElement)