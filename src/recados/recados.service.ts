import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entitty';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

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
    const recado = this.recados.find(item => item.id === +id);
    if (recado) return recado;

    throw new NotFoundException(`Recado: O ID ${id} não encontrado`);
  }

  //oq o create faz?
  create(createRecadoDto: CreateRecadoDto) {
    //recebe o boddy que no momento fala que ele n é nada
    this.lastId++;
    //retorna +1
    const id = this.lastId;
    //pega o id e joga na outra variavel
    const novoRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(novoRecado);

    return novoRecado;
  }

  update(id: string, updateRecadoDto: UpdateRecadoDto) {
    //ele acha o indici do recado que tem o mesmo ID que o passado no parametro
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );

    //se encontrara ele troca o recado antigo pelo novo, mantendo o ID e atualizando o resto
    if (recadoExistenteIndex >= 0) {
      const recadoexistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoexistente,
        ...updateRecadoDto,
      };
    }
    return this.recados[recadoExistenteIndex];
  }

  delete(id: string) {
    //ele procura o ID
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    //e se ele encontrar, ele deleta o recado

    const recado = this.recados[recadoExistenteIndex];
    if (recadoExistenteIndex >= 0) {
      this.recados.splice(recadoExistenteIndex, 1);
    }
    return recado;
  }
}
