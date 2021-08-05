import { BaseComponent, Component } from '../component.js';

export interface Composble {
    addChild(child: Component): void;
}
type OnCloseListener = () => void;
type SectionContainerConstructor = {
    new(): SectionContainer
}
interface SectionContainer extends Component, Composble {
    setOnCloseListener(listener: OnCloseListener): void;
}
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
    private closeListener?: OnCloseListener
    constructor() {
        super(`<li class="page-item">
            <section class="page-item__body">
            </section>
            <div class="page-item__controls">
                <button class="close">&times;</button>
            </div>
        </li>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }
    }
    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container); // position은 optiional
    }
    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composble {
    constructor(private pageItemConstructor: SectionContainerConstructor) {
        super('<ul class="page"> </ul>')
    }
    addChild(section: Component) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}