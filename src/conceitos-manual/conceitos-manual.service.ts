import { Injectable } from "@nestjs/common";

@Injectable()
export class ConceitosManualService{
    //nome que deve voltar para o controller para chamar a rota para a resposta do service
    SolucionaHome():string{
        return "Home do conceito manual solucionada";
    }
}