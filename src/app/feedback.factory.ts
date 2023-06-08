import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {
  Feedback,
  ErrorMessageFeedback,
  SuccessMessageFeedback,
  ErrorNotificationFeedback,
  SuccessNotificationFeedback,
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

@Injectable()
export class NotificationFeedbackFactory extends FeedbackFactory {
  constructor(protected notificationService: NzNotificationService) {
    super();
  }

  createFeedback<T extends any>(response: HttpResponseBase): Feedback {
    return response instanceof HttpErrorResponse
      ? new ErrorNotificationFeedback(
          this.notificationService,
          response.error.title,
          response.error.description
        )
      : new SuccessNotificationFeedback(
          this.notificationService,
          'Request is successful'
        );
  }
}
