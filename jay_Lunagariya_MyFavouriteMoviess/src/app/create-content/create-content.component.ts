import { Component, EventEmitter, Output } from '@angular/core';
// @ts-ignore
import { Content } from '../helper-files/content-interface.ts';
import { content } from '../helper-files/contentDb';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  constructor(private movieService: MovieService) {}

  addContent() {
    const content: Content = {
      ...this.newContent,
      id: Date.now().toString()
    };
    const promise = new Promise<void>((resolve, reject) => {
      if (this.newContent.title && this.newContent.type) {
        this.movieService.getContent().subscribe((contentArray) => {
          contentArray.push(content);
          this.newContent = { title: '', description: '', type: '' };
          console.log(`Successfully added ${content.title}!`);
          resolve();
        });
      } else {
        reject('Please fill in all required fields.');
      }
    });
    promise
      .then(() => {
        this.errorMsg = '';
      })
      .catch((errorMsg) => {
        this.errorMsg = errorMsg;
      });
  }

  @Output() contentCreated = new EventEmitter<Content>();
  newContent: Content = { id: '', title: '',creator:'', type: '' };
  errorMessage: string = '';

  onSubmit() {
    if (!this.newContent.id || !this.newContent.title || !this.newContent.type) {
      this.errorMessage = 'Please fill in all required fields';
      return Promise.reject('Required fields not filled');
    }
    this.contentCreated.emit(this.newContent);
    console.log(`Content added: ${this.newContent.title}`);
    this.newContent = { id: '', title: '',creator:'', type: '' };
    this.errorMessage = '';
    return Promise.resolve();
  }
}
