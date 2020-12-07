import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'button-component',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    @Input() className: any;
    @Input() label: any;
    @Input() type: any;

    @Output() onClick = new EventEmitter<any>();

    constructor() {
      console.log('this.className :>> ', this.className);
    }

    onClickButton(event) {

      this.onClick.emit(event);

  }
}
