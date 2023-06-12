import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  Feedback,
  ErrorMessageFeedback,
  SuccessMessageFeedback,
} from './feedback';

export abstract class FeedbackFactory {
  showFeedback = (response: HttpResponseBase) => {
    const feedback = this.createFeedback(response);
    feedback.show();
  };

  abstract createFeedback<T extends any>(response: HttpResponseBase): Feedback;
}

@Injectable()
export class MessageFeedbackFactory extends FeedbackFactory {
  constructor(private messageService: NzMessageService) {
    super();
  }

  createFeedback<T extends any>(response: HttpResponseBase): Feedback {
    return response instanceof HttpErrorResponse
      ? new ErrorMessageFeedback(
          this.messageService,
          response.error.description
        )
      : new SuccessMessageFeedback(
          this.messageService,
          'Request is successful'
        );
  }
}
