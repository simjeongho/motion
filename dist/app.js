import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        const todo = new TodoComponent('todo-title이지롱', 'todo');
        const note = new NoteComponent('note-title', '바디지롱');
        image.attachTo(appRoot, 'beforeend');
        note.attachTo(appRoot, 'beforeend');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
