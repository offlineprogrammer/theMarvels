import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MarvelsService } from "../services/marvels.service";
import { character } from "../interfaces/character";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {

  private marvel: character;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private marvelsService: MarvelsService
  ) {}

  ngOnInit() {
    let marvelId = this.route.snapshot.paramMap.get('id');
    console.log(marvelId);
     this.marvelsService.getMarvel(marvelId).then(response => {
      console.log(response);
      this.marvel = response[0];
    })
    .catch(err => {
      console.warn(err);
    });
  
  }
}
