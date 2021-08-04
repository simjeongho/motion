import { BaseComponent, Component } from '../component.js';

export interface Composble {
    addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composble {
    constructor() {
        super(`<li class="page-item">
            <section class="page-item__body">
            </section>
            <div class="page-item__controls">
                <button class="close">&times;</button>
            </div>
        </li>`);
    }
    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container); // position은 optiional
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composble {
    constructor() {
        super('<ul class="page"> </ul>')
    }
    addChild(section: Component) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
    }
}