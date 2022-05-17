export class Slider {
    #slider;
    #rightButton;
    #leftButton;

    constructor(slider, leftButton, rightButton) {
        this.#slider = slider;
        this.#rightButton = rightButton;
        this.#leftButton = leftButton;

        this.#rightButton.on('click', this.next.bind(this))
        this.#leftButton.on('click', this.previous.bind(this))
        
    }

    previous() {
        if (this.#isTransitionInProgress()) {
            return;
        }

        const first = this.#firstImage();
        const duplicated = first.cloneNode(true);

        this.#insertElement(duplicated, 'end')
        this.#removeElement(first)
    }

    next() {
        if (this.#isTransitionInProgress()) {
            return;
        }

        const last = this.#lastImage();
        const duplicated = last.cloneNode(true);

        this.#removeElement(last)
        this.#insertElement(duplicated)
    }

    #isTransitionInProgress() {
        return this.#slider.find('.fade-in,.fade-out').length > 0
    }

    #lastImage() {
        return this.#slider.lastElementChild;
    }

    #firstImage() {
        return this.#slider.firstElementChild;
    }

    #insertElement(el, position = 'start') {
        $(el).addClass('fade-in');

        if (position === 'start') {
            this.#slider.prepend(el);
        } else {
            this.#slider.append(el)
        }

        $(el).on('animationend', (e) => {
            $(el).removeClass('fade-in');
        });
    }

    #removeElement(el) {
        $(el).on('animationend', (e) => {
            el.remove()
        });

        $(el).addClass('fade-out');
    }
}

