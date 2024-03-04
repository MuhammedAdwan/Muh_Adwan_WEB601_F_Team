import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent implements OnInit{
  ngOnInit(): void {}

  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };

  errorMessage: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  addContent(contentForm: NgForm) {

  const promise = new Promise<Content>((resolve, reject) => {
    // Simulate a potential delay or server interaction
    setTimeout(() => {
      // For successful addition, simulate a random success or failure
      if (Math.random() > 0.5) {
        // Random success simulation 
        resolve(this.newContent);
      } else {
        reject('Failed to add content');
      }
    }, 1000); // 1-second simulated delay
  });

  promise.then(
    (newContent) => {
      this.contentAdded.emit(newContent);
      this.newContent = { ...this.newContent, id: 0, title: '' }; // Clear values
      contentForm.resetForm();
      this.errorMessage = '';
    },
    (error) => {
      this.errorMessage = error;
    }
  );
}
}
