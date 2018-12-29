import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MarvelsService } from "../services/marvels.service";
import { character } from "../interfaces/character";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private marvelsService: MarvelsService
  ) {}

  ngOnInit() {
    console.log("Starting");
    this.marvelsService
      .load()
      .then(response => {
        console.log(this.marvelsService.Marvels);
        console.log(response);
      })
      .catch(err => {
        console.warn(err);
      });
  }
}
