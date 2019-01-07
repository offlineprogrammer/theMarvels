import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MarvelsService } from "../services/marvels.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  queryText = '';

  constructor(
    private navCtrl: NavController,
    public marvelsService: MarvelsService,
    private loadingController: LoadingController
  ) {}

  async  ngOnInit() {
    console.log("Starting");
    const loading = await this.loadingController.create({
      message: "Please wait..."
    });
    await loading.present();
    this.marvelsService
      .load(null)
      .then(response => {
        console.log(this.marvelsService.Marvels);
        console.log(response);
        loading.dismiss();
      })
      .catch(err => {
        console.warn(err);
        loading.dismiss();
      });
  }

   async updateTheMarvels(){
    const loading = await this.loadingController.create({
      message: "Please wait..."
    });

    await loading.present();
    console.log("Updae");
    this.marvelsService.Marvels = [];
    this.marvelsService.Offset = 0;
    this.marvelsService
      .load(this.queryText)
      .then(response => {
        console.log(this.marvelsService.Marvels);
        console.log(response);
        loading.dismiss();
      })
      .catch(err => {
        console.warn(err);
        loading.dismiss();
      });

  }

  loadData(event) {
    setTimeout(() => {

      this.marvelsService
      .load(this.queryText)
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
