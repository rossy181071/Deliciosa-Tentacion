import { LitElement, html, css } from "lit";

export class MalteadasComponent extends LitElement {
    static get properties() {
        return {
           
            title0: { type: String },
            Paragraph0: { type: String },

            title1: {type: String},
            imgUrl1: {type: String},

            title2: {type: String},
            imgUrl2: {type: String},

            title3: {type: String},
            imgUrl3: {type: String},

            title4: {type: String},
            imgUrl4: {type: String},

            title5: {type: String},
            imgUrl5: {type: String},

            title6: {type: String},
            imgUrl6: {type: String},

            title7: {type: String},
            imgUrl7: {type: String},

            title8: {type: String},
            imgUrl8: {type: String},

        }
    }

    constructor() {
        super()
        this.title0 = "DELICIOSA TENTACION"
        this.Paragraph0 = "Estos son los diferentes sabores y presentacion en Malteadas y Smoothies :"

        this.title1 = "Malteada de Chocolate"
        this.imgUrl1 = "https://sabordemex.mx/wp-content/uploads/2024/08/malteada-chocolate.png"

        this.title2 = "Malteada de Vainilla"
        this.imgUrl2 = "https://carloslealjimenez.wordpress.com/wp-content/uploads/2013/08/vanilla_peach_shake_clj.jpg"

        this.title3 = "Malteada de Fresa"
        this.imgUrl3 = "https://www.elespectador.com/resizer/v2/E4WMDP2NWNHJ7KNXQKKFN2SNVE.jpg?auth=09248101c42c49fe6d356a8f9c16618bf1e56901e74cdf57a8afb1c191cb156b&width=920&height=613&smart=true&quality=60"

        this.title4 = "Malteada de Moka"
        this.imgUrl4 = "https://vivirmejor.mx/wp-content/uploads/2022/03/frappe%CC%81-de-moka.jpg.webp"

        this.title5 = "Smoothie de Pi&a"
        this.imgUrl5 = "https://www.cocinavital.mx/wp-content/uploads/2020/03/smoothie-antioxidante-hidratante-pina.jpg"

        this.title6 ="Smoothie de Pepino y limon"
        this.imgUrl6 = "https://www.diariodequeretaro.com.mx/incoming/wg8qsy-frappe-de-pepino.jpg/ALTERNATES/LANDSCAPE_960/Frappe%20de%20pepino.jpg"

        this.title7 = "Smoothie de Mango"
        this.imgUrl7 = "https://www.cocinavital.mx/wp-content/uploads/2019/02/licuado-mango-avena-coco.jpg"

        this.title8 = "Smoothie de Oreo"
        this.imgUrl8 = "https://img.freepik.com/fotos-premium/smoothie-leche-oreo-crema-taza-plastico-bebida-saludable-refrescarse-enfriarse_1235831-112719.jpg"
    }

    static get styles() {
        return css`
        #malteadas-container {
            background-color: #668866;

            padding: 2vw;

        }
        
        .img-malteada {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="malteadas-container">

            <h1>${this.title0}</h1>
            <p>${this.Paragraph0}</p>


        <ol>

        <li><h1>${this.title1}</h1></li>
        <img class="img-malteada" src="${this.imgUrl1}">

        <li><h1>${this.title2}</h1></li>
        <img class="img-malteada" src="${this.imgUrl2}">

        <li><h1>${this.title3}</h1></li>
        <img class="img-malteada" src="${this.imgUrl3}">

        <li><h1>${this.title4}</h1></li>
        <img class="img-malteada" src="${this.imgUrl4}">

        <li><h1>${this.title5}</h1></li>
        <img class="img-malteada" src="${this.imgUrl5}">

        <li><h1>${this.title6}</h1></li>
        <img class="img-malteada" src="${this.imgUrl6}">

        <li><h1>${this.title7}</h1></li>
        <img class="img-malteada" src="${this.imgUrl7}">

        <li><h1>${this.title8}</h1></li>
        <img class="img-malteada" src="${this.imgUrl8}">
         
        </ol>
        
    </div>
        `
    }
}


window.customElements.define('malteadas-component', MalteadasComponent)