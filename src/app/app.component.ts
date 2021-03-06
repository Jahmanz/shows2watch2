import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Shows to watch';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedShow = null;

  masterShowList: Show[] = [
    new Show('The Shield', 3),
    new Show('Breaking Bad', 2),
    new Show('House of Cards', 2)
  ];

  editShow(clickedShow) {
    this.selectedShow = clickedShow;
  }

  finishedEditing() {
   this.selectedShow = null;
 }
 addShow(newShow: Show) {
   this.masterShowList.push(newShow);
 }

}
