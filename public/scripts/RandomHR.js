class RandomHR extends HTMLElement {
    static observedAttributes = ["root"];

    connectedCallback() {
        const n = 1 + Math.floor(Math.random() * 6);
        this.innerHTML = `<hr style="height: 40px;
                                     scale: 1;
                                     background: url(${this.getAttribute("root")}/images/hr/hr_${n}.png) no-repeat scroll center;
                                     border: none;
                                     image-rendering: pixelated;"/>`;
    }
}
customElements.define("random-hr", RandomHR);
