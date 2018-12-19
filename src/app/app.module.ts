import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimpleFormComponent} from './components/simple-form/simple-form.component';
import {MailService} from './services/mail.service';
import { InlineComponent } from './components/inline/inline.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MailService,
    {provide: 'api', useValue: 'http://localhost:3000/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
