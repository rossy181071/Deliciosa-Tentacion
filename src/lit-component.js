import { LitElement, html, css } from "lit";

export class LitComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            paragraph: { type: String },
            imgUrl: { type: String }
        }
    }

    static get styles() {
        return css`
        #lit-container {
            background-color: #886666;

            padding: 2vw;
        }

        .imagen-pasteleria {
            width: 300px

        }
        `
    }

    constructor() {
        super()
        this.title = "Pasteles completos y por Rebanadas de Pastel"
        
        
    }

    render() {
        return html`
        <div id="lit-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
            <img class = "imagen-pasteleria" src="${this.imgUrl}">
            
        </div>


        <ol>
                
                <li><h3>Pastel de Chocolate</h3><img class="imagen-pasteleria" src="https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/1bc6405c821c74d73962cf9fa32f9518.png"></li>
                <li><h3>Pastel de 3 Leches</h3><img class="imagen-pasteleria" src="https://i.pinimg.com/736x/72/21/8d/72218d6cf86cfbf0892eb40a92b06e1e.jpg"></li>
                <li><h3>Pastel Moka</h3><img class="imagen-pasteleria" src="https://i.ytimg.com/vi/HCRCYgWDB3k/maxresdefault.jpg"></li>
                <li><h3>Pastel Selva Negra</h3><img class="imagen-pasteleria" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiuAQmCPghW_yi9DRc7soRoCDNdEVKqNpSQ&s"></li>
                <li><h3>Pastel de Cajeta</h3><img class="imagen-pasteleria" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVq1wApr39ppNDeWmoKvkQsUj_v8KC4IS7Q&s"></li>
                <li><h3>Pastel de Zanahoria</h3><img class="imagen-pasteleria" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoljIsprKt8S5tIA8lteMeTnBS_xldtpW6IQ&s"></li>
                <li><h3>Pastel San Martin de colores </h3><img class="imagen-pasteleria" src="https://ds1e83w8pn0gs.cloudfront.net/fotosmultisite/50411-1.jpg"></li>
                <li><h3>Pan de Elote </h3><img class="imagen-pasteleria" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXUqKxZhkVoB37MYlwFSYny0L1zugpgGAgw&s"></li>
                


        </ol>
        `
    }
 }


window.customElements.define('lit-component', LitComponent)