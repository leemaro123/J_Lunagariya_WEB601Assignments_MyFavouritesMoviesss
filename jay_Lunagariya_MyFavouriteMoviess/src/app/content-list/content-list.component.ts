import { Component, OnInit } from '@angular/core';
import { content } from '../helper-files/contentDb';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  searchTitle: string | undefined;
  searchResult: { message: string; color: string; } | undefined;
  contents = [
    ];
  // @ts-ignore
  typefilter: string ;

  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor(private movieService: MovieService) {}


  ngOnInit() {
    this.movieService.getContent().subscribe((content) => {
      this.originalList = content.slice();
      this.filteredList = content.slice();
    });
  }

  searchByTitle() {
    const content = this.contents.find((c) => c.title === this.searchTitle);
    if (content) {
      this.searchResult = { message: `Content with title "${this.searchTitle}" exists.`, color: 'green' };
    } else {
      this.searchResult = { message: `Content with title "${this.searchTitle}" doesn't exist.`, color: 'red' };
    }
  }

}
