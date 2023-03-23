import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-butt-list',
  templateUrl: './butt-list.component.html',
  styleUrls: ['./butt-list.component.css']
})
export class ButtListComponent {

  constructor(private router: Router) { }

ngOnInit() {}

isHomePage(): boolean {
    return this.router.url === "/";
}

isSelectedPage(): boolean {
  return this.router.url === "/selected";
}

isHistoryPage(): boolean {
  return this.router.url === "/history";
}



}
