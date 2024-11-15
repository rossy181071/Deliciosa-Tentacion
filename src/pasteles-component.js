import { LitElement, html, css } from "lit";

export class PastelesComponent extends LitElement {
    static get properties() {
        return {
            title0: { type: String },
            
        

            title1: {type: String},
            imgUrl1: {typer: String },
           
            title2: {type: String},
            imgUrl2: {typer: String },
            
            title3: {type: String},
            imgUrl3: {typer: String },
            
            title4: {type: String},
            imgUrl4: {typer: String },
            
            title5: {type: String},
            imgUrl5: {typer: String },
            
            title6: {type: String},
            imgUrl6: {typer: String },
            
            title7: {type: String},
            imgUrl7: {typer: String },
            
           

            
        }
    }

    static get styles() {
        return css`
        #pasteles-container {
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
        

        this.title1= "Pastel de Chocolate"
        this.imgUrl1= "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/1bc6405c821c74d73962cf9fa32f9518.png"

        this.title2= "Pastel de 3 Leches"
        this.imgUrl2= "https://i.pinimg.com/736x/72/21/8d/72218d6cf86cfbf0892eb40a92b06e1e.jpg"

        this.title3= "Pastel Moka"
        this.imgUrl3= "https://i.ytimg.com/vi/HCRCYgWDB3k/maxresdefault.jpg"

        this.title4=  "Pastel Selva Negra"
        this.imgUrl4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiuAQmCPghW_yi9DRc7soRoCDNdEVKqNpSQ&s"

        this.title5 = "Pastel de Cajeta"
        this.imgUrl5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVq1wApr39ppNDeWmoKvkQsUj_v8KC4IS7Q&s"

        this.title6= "Pastel de Zanahoria"
        this.imgUrl6= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoljIsprKt8S5tIA8lteMeTnBS_xldtpW6IQ&s"

        this.title7= "Pastel San Martin de colores "
        this.imgUrl7= "https://ds1e83w8pn0gs.cloudfront.net/fotosmultisite/50411-1.jpg"

        this.title8 = "Pan de Elote"
        this.imgUrl8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXUqKxZhkVoB37MYlwFSYny0L1zugpgGAgw&s"
          
    }

    render() {
        return html`
        <div id="pasteles-container">
            
        <h1>${this.title}</h1>
    
        


        <ol>
            <li><h1>${this.title1}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl1}">

            <li><h1>${this.title2}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl2}">

            <li><h1>${this.title3}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl3}">

            <li><h1>${this.title4}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl4}">

            <li><h1>${this.title5}</h1></li>
            <img class= "imagen-pasteleria" src="${this.imgUrl5}">

            <li><h1>${this.title6}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl6}">

            <li><h1>${this.title7}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl7}">

            <li><h1>${this.title8}</h1></li>
            <img class="imagen-pasteleria" src="${this.imgUrl8}">            
            
            
                
                


        </ol>
    </div>
        `
    }
 }


window.customElements.define('pasteles-component', PastelesComponent)