export default class Calcul {

    constructor(private phrasecalcul: string,
                public resultat: string){}

    getPhrasecalcul() {
        return this.phrasecalcul;
    }
    getResultat() {
        return this.resultat;
    }
}
