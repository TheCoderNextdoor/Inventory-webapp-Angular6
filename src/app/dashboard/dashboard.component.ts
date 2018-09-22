import { Component, OnInit } from '@angular/core';
import {Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
 items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    // this gets all the favourite items
    this.itemService.getItems()
    // loops through each item and adds it
    // to the items[] array if it is a favourite
      .subscribe( (items) => {
                for (const item of items) {
          if (item.isFavourite) {
            this.items.push(item);
          }
        }
      });
  }
}
