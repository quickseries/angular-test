import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'wl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input()
  dataSource:any;

  @Input()
  selected=[0];

  @Input()
  selected_color:string = '#b0d9ec';

  public columns_order: string[];

  selectRow(index){
    let style = '';
    for(let i = 0; i<=index; i++ ){
      if(index === this.selected[i]){
        style = this.selected_color;
      }
    }
    return style;
  }

  ngOnInit() {
    this.columns_order = this.initColumns(this.dataSource[0]);
    this.selectRow(0);
  }

  initColumns(obj){
    let data = [];
    Object.entries(obj).forEach(([key]) => {
      data.push(key);
    });
    return data;
  }
}
