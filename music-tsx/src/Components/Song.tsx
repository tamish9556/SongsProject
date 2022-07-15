
export enum Gener {ROCK, POP, RAP, CLASSICAL, FUNK, SOUL, HIPHOP}

export class Song {
    public title: String= '';
    public artist: String = '';
    public gener: Gener = Gener.CLASSICAL;
    public length: Number = 0; 
    public price: Number = 0;

    constructor(title:String,artist:String,gener:Gener, length:Number, price: Number) {
        this.title = title;
        this.artist = artist;
        this.gener = gener;
        this.length = length;
        this.price = price;
    }
}