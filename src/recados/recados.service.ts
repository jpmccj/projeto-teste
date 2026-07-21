import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entitty';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Recado 1',
      de: 'João',
      para: 'Maria',
      lido: false,
      data: new Date(),
    },
  ];

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    return this.recados.find(item => item.id === +id);
  }

  //oq o create faz?
  create(body: any) {
    //recebe o boddy que no momento fala que ele n é nada
    this.lastId++;
    //retorna +1
    const id = this.lastId;
    //pega o id e joga na outra variavel
    const novoRecado = {
      id,
      ...body,
    };
    this.recados.push(novoRecado);

    return novoRecado;
  }

  update(id: string, body: any) {
    //ele acha o indici do recado que tem o mesmo ID que o passado no parametro
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    //se encontrara ele troca o recado antigo pelo novo, mantendo o ID e atualizando o resto
    if (recadoExistenteIndex >= 0) {
      const recadoexistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoexistente,
        ...body,
      };
    }
  }

  delete(id: string) {
    //ele procura o ID
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    //e se ele encontrar, ele deleta o recado
    if (recadoExistenteIndex >= 0) {
      this.recados.splice(recadoExistenteIndex, 1);
    }
  }
}
