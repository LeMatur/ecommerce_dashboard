import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  showLoader$ = this.loaderService.loadingAction$;

  constructor(
    private loaderService: LoaderService,
  ) {}
}
