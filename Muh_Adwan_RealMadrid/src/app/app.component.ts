import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { RealMadridService } from './helper-files/real-madrid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Muh_Adwan_RealMadrid';
  SingleContentItem: Content | undefined;
  selectedId: number | undefined;
  errorMessage: string | undefined;
  constructor(private realMadridService: RealMadridService) {}

  ngOnInit() {
    const id = 1; 
    this.realMadridService.getContentById(id).subscribe(content => {
      this.SingleContentItem = content;
    });
  }

loadContentItem(id: number): void {
  this.realMadridService.getContentById(id).subscribe(item=> {
    this.SingleContentItem = item;
  },
  error => {
    console.error('Error occured while trying to retrieve the content item by id:', error);
  }
  );
}
}