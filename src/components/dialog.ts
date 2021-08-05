import { Composble } from './page/page.js';
import { BaseComponent, Component } from './component.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composble {
    closeListener?: OnCloseListener;
    submitListener?: OnSubmitListener;
    constructor() {
        super(`<dialog class="dialog">
                    <div class= "dialog__container">
                    <button class="close">&times;</button>
                    <div class="dialog__body"></div>
                    <button class="dialog__summit">ADD</button>
                    </div>
            </dialog>`);
        const closeBtn = this.element.querySelector('.close') as HTMLElement;

        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }

        const submitBtn = this.element.querySelector('.dialog__summit') as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }

    setOncloseListener(Listener: OnCloseListener) {
        this.closeListener = Listener;
    }
    setOnsubmitListener(Listener: OnSubmitListener) {
        this.submitListener = Listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attachTo(body);
    }
}