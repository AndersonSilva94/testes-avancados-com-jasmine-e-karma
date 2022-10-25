import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

  @Output() public liked: EventEmitter<void> = new EventEmitter();
  @Input() public description: string = "";
  @Input() public src: string = "";
  @Input() public likes: number = 0;

  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor() { }

  public ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe)
      )
      .subscribe(
        () => this.liked.emit()
      )
  }

  public like(): void {
    this.debounceSubject.next();
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
