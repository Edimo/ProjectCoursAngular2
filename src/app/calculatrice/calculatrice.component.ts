import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resultat = '0';
  historique = {
    historique1 : '',
    historique2 : '',
    historique3 : '',
    historique4 : ''
  }
  
  clickBtn = function(a){
	  if (this.resultat=='0') this.resultat='';
	  this.resultat = this.resultat + a;
  }
  
  operateur = function(a){
	  if (this.resultat=='0') this.resultat='';
	  this.resultat = this.resultat + a;
  }
  
  egal = function(){
    this.historique.historique4 = this.historique.historique3;
    this.historique.historique3 = this.historique.historique2;
    this.historique.historique2 = this.historique.historique1;
    this.historique.historique1 = this.resultat + '=' +eval(this.resultat);
	  this.resultat = eval(this.resultat);
  }

}
