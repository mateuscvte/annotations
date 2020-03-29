import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Table} from '../../domain/table';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  @Input() table: Table[];
  @Output() remove = new EventEmitter();
  cols: any[];

  constructor() {
  }

  ngOnInit() {
    this.cols = [
      { field: 'client', header: 'Cliente' },
      { field: 'service', header: 'Serviço' },
      { field: 'date', header: 'Data' },
      { field: 'hour', header: 'Horário' },
      { field: 'value', header: 'Valor' },
    ]
  }

  removeAnnotation(rowData) {
    this.remove.emit(rowData);
  }
}
