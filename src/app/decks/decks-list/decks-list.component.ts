import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";

const element_data: any  = [
  {
    name: 'HTML/CSS',
    cards: '1'
  }
];

@Component({
    selector: 'app-decks-list',
    imports: [
        MatTableModule,
    ],
    templateUrl: './decks-list.component.html',
    styleUrl: './decks-list.component.scss'
})
export class DecksListComponent {
  public displayedColumns: string[] = ['name', 'cards'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource(element_data);

}
