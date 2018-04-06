import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filterheroe',
  templateUrl: './filterheroe.component.html'
})
export class FilterheroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })
  }

}
