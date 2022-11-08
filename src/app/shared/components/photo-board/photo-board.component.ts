import { Component, Input, OnInit } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnInit {
  @Input() public photos: Photo[];

  public rows: any[][] = [];

  ngOnInit(): void {
  }

}
