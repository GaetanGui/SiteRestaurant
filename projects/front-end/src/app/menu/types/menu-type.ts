export class MenuItemType{
    text: string;
    name: string;
    image: string;
    isImgPositionRight: boolean;
    price: string;

    constructor(text: string, name: string, image : string, isImgPositionRight: boolean, price: string ){
        this.text = text;
        this.name = name;
        this.image = image;
        this.isImgPositionRight = isImgPositionRight;
        this.price = price 
    }
}