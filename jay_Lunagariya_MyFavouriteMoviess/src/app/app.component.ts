import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Content } from './models/content';
import { AppMessagesService } from './services/app-messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: string = '';
  movie: Content | undefined;

  constructor(private movieService: MovieService, private messagesService: AppMessagesService) { }

  getMovie() {
    const idNumber = parseInt(this.id);
    if (isNaN(idNumber) || idNumber < 1 || idNumber > this.movieService.getContentLength()) {
      this.messagesService.addMessage('Error: Invalid ID');
    } else {
      this.movieService.getSingleContent(idNumber).subscribe(
        movie => {
          this.movie = movie;
          this.messagesService.addMessage(`Content Item at id: ${idNumber}`);
        },
        error => {
          console.error(error);
          this.messagesService.addMessage('Error: Failed to get movie');
        }
      );
    }
  }
}
