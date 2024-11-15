import  { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component'

import {BienvenidaComponent} from './bienvenida-component'

import { MalteadasComponent } from './malteadas-component'

import { PastelesComponent } from './pasteles-component'

import { PostresComponent } from './postres-component'

export class RootComponent extends LitElement {
    static get properties () {
        return {
            currentPage: {
                type: String
            },

        }
    }

    static get styles () {
        return css`
        #root-container {
            background-color: #666;
        }
        `
    }

    constructor() {
        super()
        this.currentPage = "homepage"
    }
    handlePageChange(e) {
        this.currentPage = e.detail
    }


        render() {    
           let pageTemplate = nothing
           
            switch (this.currentPage) {
                case 'bienvenida':
                    pageTemplate = html`<bienvenida-component></bienvenida-component>`
                    break;
                case 'malteadas':
                    pageTemplate = html`<malteadas-component></malteadas-component>`
                    break;
                case 'pasteles':
                    pageTemplate = html`<pasteles-component></pasteles-component>`
                    break;
                case 'postres':
                    pageTemplate = html`<postres-component></postres-component>`

            }
            
            return html`
            <div id="root-container">
                <navbar-component @change-page="${this.handlePageChange}"></navbar-component>
            ${pageTemplate}
            </div>`     
        }
    }

window.customElements.define ('root-component', RootComponent)