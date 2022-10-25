import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-radio-size',
  templateUrl: './radio-size.component.html',
  styleUrls: ['./radio-size.component.scss'],
})
export class RadioSizeComponent {
  @Output() changeSize = new EventEmitter();

  public size(size: string) {
    this.changeSize.emit(size);
  }
}
