import { LitElement, html, css  } from "lit";

export class HomepageComponent extends LitElement {
static get properties() {
    return {
        title: { type: String },
        name: { type: String },
        paragraph: { type: String}

    }
}

constructor() {
    super()
    this.title = "Servicio de Cafeteria en el lugar y servicio a domicilio"
    this.name = "Rossy"
    this.paragraph = html`soy <strong>${this.name}</strong> Bienvenidos a nuestra Cafeteria donde les daremos buena atencion y calidad en nuestros Productos`
}

static get styles() {
    return css`
    #homepage-container   {
        background-color: #6666cc;

        padding: 2vw;
    }
    `
}

render() {
    return html`
    <div id="homepage-container"> 
        <h1>${this.title}</h1>
        <p>${this.paragraph}</p>
    </div>
    `
}
}

window.customElements.define('homepage-component', HomepageComponent)