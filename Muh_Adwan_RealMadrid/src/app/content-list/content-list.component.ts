import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
    id: 1,
      title: 'Item 1',
      description: 'Description for Item 1',
      creator: 'Creator 1',
      imgURL: 'https://example.com/image1.jpg',
      type: 'Type 1',
      tags: ['Tag1', 'Tag2']
  },
  {
    id: 2,
      title: 'Item 2',
      description: 'Description for Item 2',
      creator: 'Creator 2',
      imgURL: 'https://example.com/image2.jpg',
      type: 'Type 2',
      tags: ['Tag1', 'Tag2']
  },
  {
    id: 3,
      title: 'Item 3',
      description: 'Description for Item 3',
      creator: 'Creator 3',
      imgURL: 'https://example.com/image3.jpg',
      type: 'Type 3',
      tags: ['Tag1', 'Tag2']
  },
  {
    id: 4,
      title: 'Item 4',
      description: 'Description for Item 4',
      creator: 'Creator 4',
      imgURL: 'https://example.com/image4.jpg',
      type: 'Type 4',
      tags: ['Tag1', 'Tag2']
  },
  {
    id: 5,
      title: 'Item 5',
      description: 'Description for Item 5',
      creator: 'Creator 5',
      imgURL: 'https://example.com/image5.jpg',
      type: 'Type 5',
      tags: ['Tag1', 'Tag2']
  },
  {
    id: 6,
      title: 'Item 6',
      description: 'Description for Item 6',
      creator: 'Creator 6',
      imgURL: 'https://example.com/image6.jpg',
      type: 'Type 6',
      tags: ['Tag1', 'Tag2']
  }

]

constructor() {

  
}
}
