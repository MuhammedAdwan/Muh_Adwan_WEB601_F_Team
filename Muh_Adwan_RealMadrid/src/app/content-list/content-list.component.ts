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
      tags: ['Rodrygo', 'Brazil'] 
    },
    {
      id: 2,
      title: 'Vini Jr',
      description: 'Vinicius Jr. Celevrating after scoring a winning goal in the champions league final',
      creator: 'YouTube',
      imgURL: 'https://assets-cms.thescore.com/uploads/image/file/515973/w640xh480_GettyImages-1240963545.jpg?ts=1653772511',
      type: 'Pic 2',
      tags: ['Vinicius', 'Brazil']
    },
    {
      id: 3,
      title: 'Luka Modric',
      description: 'Luka Modric celebrating 14th Champion league for real madrid and his 5th one',
      creator: 'BBC',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLYDIoo2nc9lK7WhFsWemQkp9OJ-PNAM7ig&usqp=CAU',
      type: 'Pic 3',
      tags: ['Luka', 'Croatia']
    },

    {
      id: 4,
        title: 'Dani Carvajal',
        description: 'Dani Celebrating a winning comeback goal for Real Madrid Against Almaria ',
        creator: 'Creator 6',
        imgURL: 'https://s.france24.com/media/display/6db04a66-b883-11ee-a5fb-005056a90284/w:980/p:16x9/44ee04d5bb48c9b65a63c3e19daa14eb4dfa415d.jpg',
        type: 'pic 4',
        tags: ['Carvajal', 'Spain']
    },

  {
    id: 5,
      title: 'Jude Bellingham',
      description: 'Jude Bellingham celebrating his first goal for Real Madrid in Champions League',
      creator: 'The Guardian',
      imgURL: 'https://i.guim.co.uk/img/media/fdfe1d3ec93af3a1e505ab888b169912bcb53ef7/71_123_3377_2026/master/3377.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=156e03059aba73583a481fbd558c5e66',
      type: 'Pic 5',
      tags: ['Jude', 'England']
  },
  {
    id: 6,
      title: 'Carlos Casemiro',
      description: 'Carlos Casemiro holding his 5th Champions League trophy',
      creator: 'Sky Sport',
      imgURL: 'https://e0.365dm.com/22/08/768x432/skysports-casemiro-real-madrid_5865117.jpg?20220815085230',
      type: 'Type 6',
      tags: ['Casemiro', 'Brazil']
  }

]

constructor() {

  
}
}
