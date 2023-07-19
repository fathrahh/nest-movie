import { Injectable } from '@nestjs/common';
import * as SibApiV3Sdk from '@sendinblue/client';

import { configService } from './../config/config.service';

@Injectable()
export class MailService {
  private sibApiV3: SibApiV3Sdk.AccountApi;
  constructor() {
    this.sibApiV3 = new SibApiV3Sdk.AccountApi();
    this.sibApiV3.setApiKey(
      SibApiV3Sdk.AccountApiApiKeys.apiKey,
      configService.getSMTPSecret(),
    );
  }

  public getAccount = () => {
    this.sibApiV3.getAccount().then(
      function (data) {
        console.log('API called successfully. Returned data: ', data.body);
      },
      function (error) {
        console.error(error);
      },
    );

    console.log('here');
  };
}
