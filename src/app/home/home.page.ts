import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MarvelsService } from "../services/marvels.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
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

  loadData(event) {
    setTimeout(() => {

      this.marvelsService
      .load()
      .then(response => {
        console.log(this.marvelsService.Marvels);
        console.log(response);
        console.log('Done');
        event.target.complete();
//        event.target.disabled = true;
  
      })
      .catch(err => {
        console.warn(err);
      });
      

    }, 500);
  }

}
