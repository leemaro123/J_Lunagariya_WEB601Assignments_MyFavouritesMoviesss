import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  searchTitle: string | undefined;
  searchResult: { message: string; color: string; } | undefined;
  contents = [
    {
      id: 1,
      title: 'Ek Tha Tiger',
      image: 'https://via.placeholder.com/150x150',
      description: 'This was good movie',
      creator: 'Salman Khan',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      id: 2,
      title: 'Krish',
      image: 'https://via.placeholder.com/150x150',
      description: 'This was super hero movie',
      creator: 'Hritik Roshan',
      type: 'Superhero',
      tags: ['Tag 3', 'Tag 4']
    },
    {
      id: 3,
      title: 'War',
      description: 'This is the third content',
      creator: 'Shroff',
      tags: ['Tag3', 'Tag4'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'Vivah',
      description: 'This is the fourth content',
      creator: 'Ranbeer Kappor',
      type: 'Family',
      tags: ['Tag4', 'Tag5'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'Broly',
      description: 'This is the fifth content',
      creator: 'Tariama',
      type: 'Anime',
      tags: ['Tag5', 'Tag6'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      title: 'Kabir Singh',
      description: 'This is the sixth content',
      creator: 'Shabbir',
      type: 'Love Story',
      tags: ['Tag6', 'Tag7'],
      image: 'https://via.placeholder.com/150'
    },
  ];

  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor() { }

  ngOnInit(): void {}

  searchByTitle() {
    const content = this.contents.find((c) => c.title === this.searchTitle);
    if (content) {
      this.searchResult = { message: `Content with title "${this.searchTitle}" exists.`, color: 'green' };
    } else {
      this.searchResult = { message: `Content with title "${this.searchTitle}" doesn't exist.`, color: 'red' };
    }
  }

}
