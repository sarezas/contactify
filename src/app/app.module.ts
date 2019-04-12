import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { DetailedViewComponent } from './components/main/detailed-view/detailed-view.component';
import { ContactListComponent } from './components/main/contact-list/contact-list.component';
import { ContactsReducer } from '../app/ngrx-store/reducers/contacts.reducers';
import { ContactsEffects } from '../app/ngrx-store/effects/contacts.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DashboardComponent,
    DetailedViewComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({contacts: ContactsReducer}),
    EffectsModule.forRoot([ContactsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
