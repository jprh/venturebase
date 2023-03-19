// JavaScript Document
class ourElement extends HTMLElement {
    constructor() {
        super();
        this.name;
        this.surname;
        this.heading;
        this.style.color;
    }

    static get observedAttributes() {
        return ['name', "surname", 'heading', 'style.color'];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch (nameAttr) {
            case "name":
                this.name = newValue;
                break;
            case "surname":
                this.surname = newValue;
                break;
            case "heading":
                this.heading = newValue;
                break;
            case "style.color":
                this.style.color = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML =
            `<div>
            <h1>Haalo ${this.name} ${this.surname}</h1>
            <h3>I'm in miami bitch</h3>
            <p>Esto es un párrafo</p>
        </div>
            <div class="container wappler-block">
        <div class="row">
            <div class="col-12 col-md-6 align-self-md-center">
                <img class="wappler-type-picture w-100" height="200">
            </div>
            <div class="align-self-center col-12 col-md-6">
                <div class="row">
                    <div class="col">
                        <h4>Fancy display heading</h4>
                        <p>A nice paragraph</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h4>${this.heading}</h4>
                        <p>A nice paragraph</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h4>Fancy display heading</h4>
                        <p>A nice paragraph</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h4>Fancy display heading</h4>
                        <p>A nice paragraph</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        // this.style.color = "${this.color}";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define('our-element', ourElement);