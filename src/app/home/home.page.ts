import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {MarvelsService} from '../services/marvels.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private navCtrl: NavController, private marvelsService: MarvelsService){

  }

  ngOnInit(){

    this.marvelsService.load();
    
  }

}
