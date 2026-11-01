class RandomHR extends HTMLElement {
    connectedCallback() {
        const n = 1 + Math.floor(Math.random() * 6);
        this.innerHTML = `<hr style="height: 40px;
                                     scale: 1;
                                     background: url(images/hr/hr_${n}.png) no-repeat scroll center;
                                     border: none;
                                     image-rendering: pixelated;"/>`;
    }
}
customElements.define("random-hr", RandomHR);
