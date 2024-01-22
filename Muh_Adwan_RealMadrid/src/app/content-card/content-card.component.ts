import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {

  contentList: ContentList = new ContentList();
  
  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Item 1',
      description: 'Description for Item 1',
      creator: 'Creator 1',
      imgURL: 'https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg',
      type: 'Type 1',
      tags: ['Tag1', 'Tag2'] 
    });

    this.contentList.add({
      id: 2,
      title: 'Item 2',
      description: 'Description for Item 2',
      creator: 'Creator 2',
      imgURL: 'https://example.com/image2.jpg',
      type: 'Type 2',
      tags: ['Tag3', 'Tag4']
    });

    this.contentList.add({
      id: 3,
      title: 'Item 3',
      description: 'Description for Item 3',
      creator: 'Creator 3',
      imgURL: 'https://example.com/image3.jpg',
      type: 'Type 3',
      tags: ['Tag5', 'Tag6']
    });
  }

}