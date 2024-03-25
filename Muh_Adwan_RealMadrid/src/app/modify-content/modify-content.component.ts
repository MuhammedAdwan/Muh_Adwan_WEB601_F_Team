import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { RealMadridService } from '../helper-files/real-madrid.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent implements OnInit {
  newContent: Content = {};
  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private realMadridService: RealMadridService) {}
  ngOnInit() {}

  addContent() {
    this.realMadridService.addContent(this.newContent).subscribe(addedContent => {
      this.contentAdded.emit(addedContent); // Emit new content
      this.newContent = {}; // Reset inputs
    });
  }
}
