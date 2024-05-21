import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: `./sidebar.component.html`,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get putTags(){
    return this.gifsService.tagsHistory;
  }

}