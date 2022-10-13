import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements AfterViewInit, OnDestroy {
  loadingSubscription: Subscription = new Subscription;

  constructor(
    private loadingScreenService: LoadingService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loading$
      .pipe()
      .subscribe((status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
