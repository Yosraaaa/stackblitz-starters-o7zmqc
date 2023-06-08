import { Component } from '@angular/core';
import { FeedbackFactory, MessageFeedbackFactory } from './feedback.factory';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  template: `
  <div class="example-button-row">

    <button mat-raised-button color="accent" (click)="makeErrorRequest()">
    ERROR REQUEST
    </button>

    <button mat-raised-button color="accent" (click)="makeSuccessRequest()">
    SUCESS REQUEST
    </button>
    </div>
  `,
  providers: [
    {
      provide: FeedbackFactory,
      useClass: MessageFeedbackFactory,
    },
  ],
})
export class DemoComponent {
  constructor(private feedbackFactory: FeedbackFactory) {}

  makeErrorRequest() {
    var error = new HttpErrorResponse({
      error: {
        title: 'Unautorized Request',
        description: 'Sorry, but you are not authorized to make this request.',
      },
      status: 403,
    });
    this.feedbackFactory.showFeedback(error);
  }

  makeSuccessRequest() {
    var success = new HttpResponse({ status: 201 });
    this.feedbackFactory.showFeedback(success);
  }
}
