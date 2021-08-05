import { TextSectionInput } from './components/dialog/input/text-input.js';
import { InputDialog } from './components/dialog.js';
import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, Composble, PageItemComponent } from './components/page/page.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';

type InputComponentConstructor<T = MediaSectionInput | TextSectionInput> = {
    new(): T;
}

class App {
    private readonly page: Component & Composble;
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaSectionInput>('#new-image', MediaSectionInput,
            (input: MediaSectionInput) => new ImageComponent(input.title, input.url));

        this.bindElementToDialog<MediaSectionInput>('#new-video', MediaSectionInput,
            (input: MediaSectionInput) => new VideoComponent(input.title, input.url));

        this.bindElementToDialog<TextSectionInput>('#new-todo', TextSectionInput,
            (input: TextSectionInput) => new TodoComponent(input.title, input.body));

        this.bindElementToDialog<TextSectionInput>('#new-note', TextSectionInput,
            (input: TextSectionInput) => new NoteComponent(input.title, input.body));
        // const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        // imageBtn.addEventListener('click', () => {
        //     const dialog = new InputDialog();
        //     const media = new MediaSectionInput();
        //     dialog.addChild(media);
        //     dialog.attachTo(dialogRoot);

        //     dialog.setOncloseListener(() => dialog.removeFrom(dialogRoot));
        // })

    }

    private bindElementToDialog<T extends MediaSectionInput | TextSectionInput>
        (
            selector: string,
            InputComponent: InputComponentConstructor<T>,
            makeSection: (input: T) => Component) // 인자로 makeSection이라는 callback  생성자 함수를 받아옴 
    {
        const button = document.querySelector(selector)! as HTMLButtonElement;
        button.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            //dialog.addChild(input);//input으로 받아온 인자를 dialog에 붙여준다.
            //섹션을 만들어서 페이지에 추가해준다. 
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            console.log('button click');
            dialog.setOncloseListener(() => dialog.removeFrom(this.dialogRoot));
            dialog.setOnsubmitListener(() => {
                const image = makeSection(input);//component를 만들어준다. 
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot)
            });
        });
    };
};

new App(document.querySelector('.document')! as HTMLElement, document.body);