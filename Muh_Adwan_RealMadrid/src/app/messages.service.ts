import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'; 

@Injectable({ providedIn: 'root' })
export class MessagesService {
    private messagesSubject = new Subject<string>();

    add(message: string) {
        this.messagesSubject.next(message);
    }

    getMessages(): Observable<string> {
        return this.messagesSubject.asObservable();
    }
}