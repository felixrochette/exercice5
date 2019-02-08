import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant d'animer les lettres une après l'autre'
     * @param {string} lesLettres - contient l'ensemble lettres
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.elementParent = elementParent;
        this.lesLettres = lesLettres;
        this.AnimerLettre(this.lesLettres);
        this.fonction = fonction;
    }


    AnimerLettre(lesLettres) {
       //console.log(`les lettres =  + ${lesLettres}`);
       let elmConteneur = this.creerElement(this.elementParent,
        'div',
        '',
        'mot')

        let nbLettres = lesLettres.length;
        let i =0;
        for (let uneLettre of lesLettres){

            let elmLettre = this.creerElement(elmConteneur,
                'div',
                lesLettres[i++],
                ''
                )
                elmLettre.style.animationDelay = (i * 0.5) + "s";
            	
		}

        
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if (classCSS != '') {
            noeud.classList.add(classCSS)
        }
        
        elmParent.appendChild(noeud)
        return noeud
    }

}