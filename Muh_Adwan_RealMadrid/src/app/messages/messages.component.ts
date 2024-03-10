import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit{
  messages: string[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getMessages().subscribe(message => {
      this.messages.push(message);
      //setting a timeout to clear messages after a delay
      setTimeout(() => this.messages.shift(), 3000);
    });
  }
}
