import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home') // muda o caminho da rota
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Get('hello')//decorator, e muda o caminho da rota
  getHello(): string {
    const retorno = 'QUALQUER COISA';
    return retorno;
  }

  //@Get('exemplo')//decorator, e muda o caminho da rota
  exemplo() {
    return 'exemplo de rota';
  }

  // sempre tem que pensar do começo ao fim da url/rota onde des do inicio do home ate o final do hello onde tem um caminho para se seguir.
}
