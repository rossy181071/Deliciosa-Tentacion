import { LitElement, html, css  } from "lit";

export class ReactComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            paragraph: { type: String },
            imgUrl: { type: String }
        }
    }

    constructor() {
        super()
        this.title = "Gran variedad en Ricos Postres"
        
    }

    static get styles() {
        return css`
        #react-container {
            background-color: #66ccee;

            padding: 2vw;
        }

        .imagen-postres {
            width: 400px
        `
    }

    render(){
        return html`
        <div id="react-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
            <img class = "imagen-postres" src="${this.imgUrl}">
        </div>

        <ol>

        <li><h1>Duraznos con Crema</h1><img class="imagen-postres" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiH0xQG96kg7pEL0doPx40kL6ihEVWFxkyQA&s"></li>
        <li><h1>Fresas con Crema</h1><img class="imagen-postres" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTwfh4Hn6x2B3qkVwbbAnxpCCPKDTqGVNig&s"></li>
        <li><h1>Postre de Chocolate con Almendra, Crema y Frutos rojos</h1><img class="imagen-postres" src="https://www.cocinavital.mx/wp-content/uploads/2018/02/postre_chocolate_avellana.jpg"></li>
        <li><h1>Carlota de Mango y Fresa</h1><img class="imagen-postres" src="https://i.ytimg.com/vi/P-uW__ex-3g/maxresdefault.jpg"></li>
        <li><h1>Flan Napolitano</h1><img class="imagen-postres" src="https://mojo.generalmills.com/api/public/content/nVkc4H0aVkCcWbegp426XA_gmi_hi_res_jpeg.jpeg?v=24c5e8e8&t=16e3ce250f244648bef28c5949fb99ff"></li>
        <li><h1>Frutos Rojos con Yogurt y Cereales</h1><img class="imagen-postres" src="https://granvita.com/wp-content/uploads/2021/05/Copa-de-frutos-rojos-con-granola-snippet.jpg"></li>
        <li><h1>Fresas cubiertas con Chocolate</h1><img class="imagen-postres" src="https://www.assegur.com/totmagazine/wp-content/uploads/2021/06/mejores-postres-saludables-tomar-verano-727.jpeg"></li>
        <li><h1>Tapioca de Mango y Coco</h1><img class="imagen-postres" src="https://i.blogs.es/4db455/copia-de-portada---2024-05-16t105948.624/1366_2000.jpg"></li>
        </ol>
        `
    }

}
window.customElements.define('react-component', ReactComponent)