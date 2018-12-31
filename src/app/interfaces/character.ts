export class character {
  id: string;
  name: string;
  thumbnail: string;
  card: string;
  comics_count: number;
  charUrls: {
    [index: string]: string
  } = {};
  comics_url: string;
  detail_url: string;

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.thumbnail =
      item.thumbnail.path + "/standard_medium." + item.thumbnail.extension;
    this.card =
      item.thumbnail.path + "/standard_xlarge." + item.thumbnail.extension;
    this.comics_count = item.comics.available;

    this.charUrls = item.urls.reduce(function (map, obj) {
      map[obj.type] = obj.url;
      return map;
    }, {});

    this.comics_url = this.charUrls['comiclink'];
    this.detail_url = this.charUrls['detail'];

    //this.charUrls=item.urls.reduce((map, obj) => map[obj.type] = obj.url);
    //this.charUrls= item.urls;

    //this.charUrls= item.urls.map(item => [item.type,item.url]);
  }
}