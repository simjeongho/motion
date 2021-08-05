import { TextSectionInput } from './components/dialog/input/text-input.js';
import { InputDialog } from './components/dialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const button = document.querySelector(selector);
        button.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            console.log('button click');
            dialog.setOncloseListener(() => dialog.removeFrom(this.dialogRoot));
            dialog.setOnsubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
    ;
}
;
new App(document.querySelector('.document'), document.body);
