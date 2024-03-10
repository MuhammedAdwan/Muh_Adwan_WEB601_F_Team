import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { RealMadridService } from '../helper-files/real-madrid.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{

  //initializing an empty array
  filteredContentArray: Content[] = [];
  searchTitle: string = '';
  searchResultMessage: string = '';
  searchResultMessageColor: string = '';
  foundItemIndex: number = -1; //if the item in not found, the index will be -1

  constructor(private realMadridService: RealMadridService) {}

  ngOnInit() {
    this.realMadridService.getContent().subscribe(content => {
      this.filteredContentArray = content;
    });
  }
    
  searchContent() {
    const foundItem = contentArray.find(item => item.title === this.searchTitle); //again removed the this because we imported the array directly
    if (foundItem) {
      this.searchResultMessage = `Content item with title '${this.searchTitle}' exists.`;
      this.searchResultMessageColor = 'green';
    } else {
      this.searchResultMessage = `Content item with title '${this.searchTitle}' doesn't exist.`;
      this.searchResultMessageColor = 'red';
      this.foundItemIndex = -1;
    }
  }
}
