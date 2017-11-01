import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// Routes
import { APP_ROUTING } from './app.routes';
import { AppSettingService } from './services/app.setting.services';
import { ConfigService } from './services/config.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AppSettingService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
