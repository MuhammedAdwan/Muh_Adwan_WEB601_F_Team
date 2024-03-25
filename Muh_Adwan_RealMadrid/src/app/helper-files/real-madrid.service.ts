import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content-interface';
import { contentArray } from './contentDb';
import { MessagesService } from '../messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RealMadridService {

  private baseUrl = 'api/content';

  constructor(private messagesService: MessagesService,
    private http: HttpClient
    ) {}
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

  addContent(newContent: Content): Observable<Content> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Content>(this.baseUrl, newContent, httpOptions);
  }
  
}