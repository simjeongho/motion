import { Component } from './components/component';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, Composble } from './components/page/page.js';

class App {
    private readonly page: Component & Composble;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        const video = new VideoComponent('video title', 'https://www.youtube.com/watch?v=yiwCykXaqv0');
        const todo = new TodoComponent('todo-title이지롱', 'todo');
        const note = new NoteComponent('note-title', '바디지롱');

        this.page.addChild(image);
        this.page.addChild(video);

        this.page.addChild(note);
        this.page.addChild(todo);
    }
}

new App(document.querySelector('.document')! as HTMLElement)