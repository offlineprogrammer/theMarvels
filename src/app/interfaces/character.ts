export class character {
    id:string;
    name:string;
    thumbnail:string;

    constructor(item: any) {
        this.id = item.id;
        this.name = item.name;
        this.thumbnail =  item.thumbnail.path + '/portrait_medium.'+item.thumbnail.extension;
    }
}