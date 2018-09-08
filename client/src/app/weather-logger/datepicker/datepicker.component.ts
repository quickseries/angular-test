import { Component, Input, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'wl-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  ngOnInit() {

  }

  pickDate(e){
    console.log(e);
    this.onPickedDate.emit(e);
  }

  @Output() onPickedDate = new EventEmitter<any>();

}
