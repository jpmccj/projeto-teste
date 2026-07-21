import { Injectable } from '@nestjs/common';
//import { styleText } from 'node:util';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
