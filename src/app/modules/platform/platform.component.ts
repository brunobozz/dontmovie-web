import { Component } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
})
export class PlatformComponent {
  public term: string = '';

  public searchTerm(event: any) {
    this.term = event;
  }
}
