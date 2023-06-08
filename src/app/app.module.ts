import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo.component";
import { FeedbackFactory, MessageFeedbackFactory } from "./feedback.factory";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzMessageModule, NzMessageServiceModule } from "ng-zorro-antd/message";
import {
  NzNotificationModule,
  NzNotificationServiceModule
} from "ng-zorro-antd/notification";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzMessageModule,
    NzMessageServiceModule,
    NzNotificationModule,
    NzNotificationServiceModule,
    MatButtonModule
  ],
  declarations: [AppComponent, DemoComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: FeedbackFactory,
      useClass: MessageFeedbackFactory
    }
  ]
})
export class AppModule {}
