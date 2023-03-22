// JavaScript Document
class myElement extends HTMLElement {
  constructor() {
    super();
    this.name;
    this.surname;
    this.parragraph; 
    this.color; 
  }

  static get observedAttributes() {
    return ['name', "surname", "parragraph", "color"];
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    switch (nameAttr) {
      case "name":
        this.name = newValue;
        break;
      case "surname":
        this.surname = newValue;
        break;
      case "parragraph":
        this.parragraph = newValue;
        break;
      case "color":
        this.color = newValue;
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `<div>
            <h1>Haalo ${this.name} ${this.surname}</h1>
            <h3>Esto es un párrafo</h3>
            <p>Esto es un párrafo</p>
            <div class="card ml-1 mr-1">
              <img class="card-img-top" alt="Card image cap" src="assets/shutterstock_1147356410.jpg">
              <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
            <div class="container wappler-block pt-5 pb-5">
        <ul class="nav nav-tabs" id="navTabs1_tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link test active" id="navTabs1_1_tab" data-bs-toggle="tab" href="#" data-bs-target="#navTabs1_1" role="tab" aria-controls="navTabs1_1" aria-selected="true" style="bac">Homes</a>
            </li>
            <li class="nav-item style30">
                <a class="nav-link test" id="navTabs1_2_tab" data-bs-toggle="tab" href="#" data-bs-target="#navTabs1_2" role="tab" aria-controls="navTabs1_2" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link test" id="navTabs1_3_tab" data-bs-toggle="tab" href="#" data-bs-target="#navTabs1_3" role="tab" aria-controls="navTabs1_3" aria-selected="false">Messages</a>
            </li>
        </ul>
        <div class="tab-content" id="navTabs1_content">
            <div class="tab-pane fade show active" id="navTabs1_1" role="tabpanel">
                <p>${this.parragraph}</p>
            </div>
            <div class="tab-pane fade" id="navTabs1_2" role="tabpanel">
                <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>
            </div>
            <div class="tab-pane fade" id="navTabs1_3" role="tabpanel">
                <p>${this.parragraph}</p>
            </div>
        </div>
        <div class="row">
            <div class="text-center col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h4>Fancy display heading<br><small class="text-muted">With faded secondary text</small></h4>
                <p>A nice paragraph</p>
                <button class="btn btn-primary">Button</button>
            </div>
        </div>
    </div>`;
    this.style.color = "${this.color}";
    this.style.fontFamily = "sans-serif";
  }
}

window.customElements.define('my-element', myElement);


//another example 
// change TagName below to any name you'd like to use as a html tag. 
// With capitalized letters TagName becomes <tag-name></tag-name> for example

class TagName extends WebComponent {
  static observedAttributes = ["title", "text"]; // These are example attributes, add as many as you need to bind data
  static mode = "none";


  get template() {
    // Add any html below between the quotes, use the attribute name like this: {title} to bind the data
    return `
    <div>
    <h1>{title}</h1>
    <p>{text}<p>
    </div>
    `;
  }

  get stylesheet() {
    // You can add css classes below if you want to be with the component
    return `

		`;
  }
}

// Add the tag name below in the array to register the component. 
// When you have more components you can list them separated with a comma

WebComponent.registerAll([
  TagName
]); 

Then you can use the component like this in html:

<tag-name title="Title here" text="Text here"></tag-name>
You can bind stuff from Wappler server connects / variables / text inputs etc with dmx-bind:

<tag-name dmx-bind:title="{{dynamic.value.location}}" text="Text here"></tag-name>