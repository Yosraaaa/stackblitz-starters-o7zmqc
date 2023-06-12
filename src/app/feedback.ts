import { NzMessageService } from 'ng-zorro-antd/message';

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
