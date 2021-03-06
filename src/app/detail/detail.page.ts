import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MarvelsService } from "../services/marvels.service";
import { character } from "../interfaces/character";
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {

  public marvel: character;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private marvelsService: MarvelsService,
    private iab: InAppBrowser
  ) {
    this.marvel={
      id: '',
      name: '',
      thumbnail: '',
      card: '',
      comics_count:0,
      charUrls:{},
      comics_url:'',
      detail_url:''
    };
  }

  openComics() {
    window.open(this.marvel.comics_url, '_system', 'location=yes');
  }

  OpenDetail() {
    window.open(this.marvel.detail_url, '_system', 'location=yes');
  }


  ngOnInit() {
    let marvelId = this.route.snapshot.paramMap.get('id');
    console.log(marvelId);
     this.marvelsService.getMarvel(marvelId).then(response => {
      console.log(response);
      this.marvel = response[0];
      console.log(this.marvel.charUrls['comiclink']);
    })
    .catch(err => {
      console.warn(err);
    });
  
  }
}
