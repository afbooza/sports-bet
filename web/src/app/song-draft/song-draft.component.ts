import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { SongDraftDataSource, SongDraftItem } from './song-draft-datasource';

@Component({
  selector: 'app-song-draft',
  templateUrl: './song-draft.component.html',
  styleUrls: ['./song-draft.component.css']
})
export class SongDraftComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatTable, {static:false}) table: MatTable<SongDraftItem>;
  dataSource: SongDraftDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SongDraftDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
