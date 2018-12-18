import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimpleFormComponent} from './components/simple-form/simple-form.component';
import {MailService} from './services/mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MailService,
    {provide: 'api', useValue: 'http://localhost:3000/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
