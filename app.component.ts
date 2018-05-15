import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dropDownOptions: string[] = ['Item1', 'Item2', 'Item3', 'Add Item'];
  showMenu = false;
  currentDepartment = 'Item1';

  showOptions(visibility): void {
    this.showMenu = visibility;
  }

}
