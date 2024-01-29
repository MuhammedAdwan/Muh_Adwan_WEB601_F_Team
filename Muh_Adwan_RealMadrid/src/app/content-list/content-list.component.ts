import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray = [
    {
      id: 1,
      title: 'Rodrygo',
      description: 'Rodrygo Scoring the winning come back goal for Real Madrid against Manchester City',
      creator: 'The Guardian',
      imgURL: 'https://i.guim.co.uk/img/media/7b8b782959e0766bef222ea898a72b5f69aac4ba/0_290_8640_5184/master/8640.jpg?width=700&quality=85&auto=format&fit=max&s=9f6b7c4acfe317d2f2ce99fbe4031c14',
      type: 'Pic1',
      tags: ['Tag1', 'Tag2'] 
    },
    {
      id: 2,
      title: 'Vini Jr',
      description: 'Vinicius Jr. Celevrating after scoring a winning goal in the champions league final',
      creator: 'YouTube',
      imgURL: 'https://assets-cms.thescore.com/uploads/image/file/515973/w640xh480_GettyImages-1240963545.jpg?ts=1653772511',
      type: 'Pic 2',
      tags: ['Tag3', 'Tag4']
    },
    {
      id: 3,
      title: 'Luka Modric',
      description: 'Luka Modric celebrating 14th Champion league for real madrid and his 5th one',
      creator: 'BBC',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLYDIoo2nc9lK7WhFsWemQkp9OJ-PNAM7ig&usqp=CAU',
      type: 'Pic 3',
      tags: ['Tag5', 'Tag6']
    },
  {
    id: 5,
      title: 'Jude Bellingham',
      description: 'Jude Bellingham celebrating his first goal for Real Madrid in Champions League',
      creator: 'Creator 5',
      imgURL: 'https://i.guim.co.uk/img/media/fdfe1d3ec93af3a1e505ab888b169912bcb53ef7/71_123_3377_2026/master/3377.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=156e03059aba73583a481fbd558c5e66',
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
