import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { RealMadridService } from './helper-files/real-madrid.service';
import { MessagesService } from './messages.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Muh_Adwan_RealMadrid';
  SingleContentItem: Content | undefined;
  selectedContentId: number | undefined; 
  errorMessage: string | undefined;

//when the appComponent is created, the constructor will be called
  constructor(private realMadridService: RealMadridService,
              private messagesService: MessagesService) {}

  ngOnInit() {
    const id = 1; 
    this.realMadridService.getContentById(id).subscribe(content => {
      this.SingleContentItem = content;
    });
  }

  getContentById() {
    if (!this.selectedContentId) return; // this is to check for the input ID value

   // this is to fetch content by ID using the service and the subscribe method is from the RxJS library to get the data from the service that could not be available immediately
    this.realMadridService.getContentById(this.selectedContentId).subscribe(
      //if the call is successful, the content will be assigned to the SingleContentItem
      content => {
        this.SingleContentItem = content; // this is to store the content in the SingleContentItem
        this.errorMessage = undefined; // this is to clear error if fetch is successful
      },
      error => {
        console.error('Error fetching content:', error);
        //error message 
        this.errorMessage = "An error occurred while fetching content!";  
        this.messagesService.add(this.errorMessage); // Or sending the error message using the MessageService 
      }
    );
  }
}