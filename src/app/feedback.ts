import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export abstract class Feedback {
  abstract show(): void;
}

export abstract class MessageFeedback extends Feedback {
  constructor(
    protected messageService: NzMessageService,
    protected message: string
  ) {
    super();
  }
}

export class ErrorMessageFeedback extends MessageFeedback {
  show() {
    this.messageService.error(this.message);
  }
}

export class SuccessMessageFeedback extends MessageFeedback {
  show() {
    this.messageService.success(this.message);
  }
}

export abstract class NotificationFeedback extends Feedback {
  constructor(
    protected notificationService: NzNotificationService,
    protected title: string,
    protected description?: string
  ) {
    super();
  }
}

export class ErrorNotificationFeedback extends NotificationFeedback {
  show() {
    this.notificationService.error(this.title, this.description as string);
  }
}

export class SuccessNotificationFeedback extends NotificationFeedback {
  show() {
    this.notificationService.success(this.title, this.description as string);
  }
}
