import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-messages',
  template: `
    <div class="messages-container">
      <div class="message" *ngFor="let message of messages">{{ message }}</div>
    </div>
  `,
  styles: [`
    .messages-container {
      position: fixed;
      top: 1rem;
      right: 1rem;
      max-width: 20rem;
      z-index: 1000;
    }

    .message {
      background-color: #fff;
      color: #000;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.25rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .error {
      font-weight: bold;
      color: red;
    }
  `]
})
export class AppMessagesComponent implements OnDestroy {
  messages: string[] = [];
  subscription: Subscription;

  constructor(private messagesService: MessagesService) {
    // Subscribe to the messages service to receive new messages
    this.subscription = this.messagesService.messages$.subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the messages service to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
