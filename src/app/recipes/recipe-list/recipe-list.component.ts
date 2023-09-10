import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fried Chicken', 'How to cook fried chicken', 'https://fastly.picsum.photos/id/591/200/300.jpg?hmac=GBnqheK8f8NgGoZ-JQIGl0uYMejcmT4gvw4PsBmUWPY')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
