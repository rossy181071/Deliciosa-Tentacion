import { LitElement, html, css  } from "lit";

export class PostresComponent extends LitElement {
    static get properties() {
        return {
            title0: { type: String },
                    

            title1: { type: String },
            imgUrl1: {type: String},

            title2: { type: String },
            imgUrl2: {type: String},

            title3: { type: String },
            imgUrl3: {type: String},

            title4: { type: String },
            imgUrl4: {type: String},

            title5: { type: String },
            imgUrl5: {type: String},

            title6: { type: String },
            imgUrl6: {type: String},

            title7: { type: String },
            imgUrl7: {type: String},

            title8: { type: String },
            imgUrl8: {type: String},

        }
    }

    constructor() {
        super()
        this.title0 = "Gran variedad en Ricos Postres"
        
        this.title1 = "Duraznos con Crema"
        this.imgUrl1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiH0xQG96kg7pEL0doPx40kL6ihEVWFxkyQA&s"

        this.title2 = "Fresas con Crema"
        this.imgUrl2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTwfh4Hn6x2B3qkVwbbAnxpCCPKDTqGVNig&s"

        this.title3 = "Postre de Chocolate con Almendra, Crema y Frutos rojos"
        this.imgUrl3 = "https://www.cocinavital.mx/wp-content/uploads/2018/02/postre_chocolate_avellana.jpg"

        this.title4 = "Carlota de Mango y Fresa"
        this.imgUrl4 = "https://i.ytimg.com/vi/P-uW__ex-3g/maxresdefault.jpg"

        this.title5 = "Flan Napolitano"
        this.imgUrl5 = "https://mojo.generalmills.com/api/public/content/nVkc4H0aVkCcWbegp426XA_gmi_hi_res_jpeg.jpeg?v=24c5e8e8&t=16e3ce250f244648bef28c5949fb99ff"

        this.title6 = "Frutos Rojos con Yogurt y Cereales"
        this.imgUrl6 = "https://granvita.com/wp-content/uploads/2021/05/Copa-de-frutos-rojos-con-granola-snippet.jpg"

        this.title7 = "Fresas cubiertas con Chocolate"
        this.imgUrl7 = "https://www.assegur.com/totmagazine/wp-content/uploads/2021/06/mejores-postres-saludables-tomar-verano-727.jpeg"

        this.title8 = "Tapioca de Mango y Coco"
        this.imgUrl8 ="https://i.blogs.es/4db455/copia-de-portada---2024-05-16t105948.624/1366_2000.jpg"
    }

    static get styles() {
        return css`
        #postres-container {
            background-color: #66ccee;

            padding: 2vw;
        }

        .imagen-postres {
            width: 400px
        `
    }

    render(){
        return html`
        <div id="postres-container">

            <h1>${this.title0}</h1>
      <ol>
            <li><h1>${this.title1}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl1}">

            <li><h1>${this.title2}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl2}">

            <li><h1>${this.title3}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl3}">

            <li><h1>${this.title4}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl4}">

            <li><h1>${this.title5}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl5}">

            <li><h1>${this.title6}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl6}">

            <li><h1>${this.title7}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl7}">

            <li><h1>${this.title8}</h1></li>
            <img class="imagen-postres" src= "${this.imgUrl8}">


          
        </ol>
        </div>
        `
          }

}

window.customElements.define('postres-component', PostresComponent)