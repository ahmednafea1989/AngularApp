import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.modle'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=90&crop=9px%2C2330px%2C5697px%2C2451px&resize=940%2C399'),
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=90&crop=9px%2C2330px%2C5697px%2C2451px&resize=940%2C399')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
