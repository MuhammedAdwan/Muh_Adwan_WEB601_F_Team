import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content-interface';
import { contentArray } from './contentDb';
import { MessagesService } from '../messages.service';

@Injectable({
  providedIn: 'root'
})
export class RealMadridService {

  constructor(private messagesService: MessagesService) {}
  getContent(): Observable<Content[]> {
    //this is to send message to the messages component
    this.messagesService.add("Content array loaded!");
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const foundItem = contentArray.find(item => item.id === id);
    this.messagesService.add(`Content Item at id: ${id}`);
    return of(foundItem); 
  }
}