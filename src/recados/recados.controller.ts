import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @Get()
    findAll(){
        return 'essa rota retorna todos os recados';
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        console.log(id);
        return `essa rota retorna o recado ${id} `;// como retorna o parametro da rota
    }

    @Post()
    create(@Body() body: any){
        return body; 
    }
}
