import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import path from 'path';

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

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any){
       
        return {
            id,
            ...body
        }
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return `Delete do ID: ${id} `;
    }
}
