export class character {
  id: string;
  name: string;
  thumbnail: string;
  card: string;

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.thumbnail =
      item.thumbnail.path + "/standard_medium." + item.thumbnail.extension;
    this.card =
      item.thumbnail.path + "/standard_xlarge." + item.thumbnail.extension;
  }
}
