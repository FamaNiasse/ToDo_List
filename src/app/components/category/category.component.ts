import { Component } from '@angular/core';
import { Image, IMAGE } from 'src/app/mocks/category.mock';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  image: Image[] = IMAGE ;
  selectedCategory: number = -1;

  selectCategory(index: number) {
    this.selectedCategory = index;
  }
}

