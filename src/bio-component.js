import { LitElement, html, css } from "lit";

export class BioComponent extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            moviesParagraph: { type: String }
        }
    }

    constructor() {
        super()
        this.name = "DELICIOSA TENTACION"
        this.title = `${this.name}`
        this.moviesParagraph = "Estos son los diferentes sabores y presentacion en Malteadas y Smoothies :"
    }

    static get styles() {
        return css`
        #bio-container {
            background-color: #668866;

            padding: 2vw;

        }
        
        .movie-poster {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="bio-container">
            <h1>${this.title}</h1>
            <p>${this.moviesParagraph}</p>
            <ol>
                <li><h3>Malteada de Chocolate</h3><img class="movie-poster" src="https://sabordemex.mx/wp-content/uploads/2024/08/malteada-chocolate.png"></li>
                <li><h3>Malteada de Vainilla</h3><img class="movie-poster" src="https://carloslealjimenez.wordpress.com/wp-content/uploads/2013/08/vanilla_peach_shake_clj.jpg"></li>
                <li><h3>Malteada de Fresa</h3><img class="movie-poster" src="https://www.elespectador.com/resizer/v2/E4WMDP2NWNHJ7KNXQKKFN2SNVE.jpg?auth=09248101c42c49fe6d356a8f9c16618bf1e56901e74cdf57a8afb1c191cb156b&width=920&height=613&smart=true&quality=60"></li>
                <li><h3>Malteada de Moka</h3><img class="movie-poster" src="https://vivirmejor.mx/wp-content/uploads/2022/03/frappe%CC%81-de-moka.jpg.webp"></li>
                <li><h3>Smoothie de Pi&a</h3><img class="movie-poster" src="https://www.cocinavital.mx/wp-content/uploads/2020/03/smoothie-antioxidante-hidratante-pina.jpg"></li>
                <li><h3>Smoothie de Pepino y limon</h3><img class="movie-poster" src="https://www.diariodequeretaro.com.mx/incoming/wg8qsy-frappe-de-pepino.jpg/ALTERNATES/LANDSCAPE_960/Frappe%20de%20pepino.jpg"></li>
                <li><h3>Smoothie de Mango</h3><img class="movie-poster" src="https://www.cocinavital.mx/wp-content/uploads/2019/02/licuado-mango-avena-coco.jpg"></li>
                <li><h3>Smoothie de Oreo</h3><img class="movie-poster" src="https://img.freepik.com/fotos-premium/smoothie-leche-oreo-crema-taza-plastico-bebida-saludable-refrescarse-enfriarse_1235831-112719.jpg"></li>
            </ol>
        </div>
        `
    }
}


window.customElements.define('bio-component', BioComponent)