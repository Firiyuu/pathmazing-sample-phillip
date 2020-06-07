import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    UseGuards,
    SetMetadata,
  } from '@nestjs/common';



import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/utilities/roles.decorator';



@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {

    constructor(private readonly usersService: UsersService) {}


    @Get()
    @Roles('admin')
    findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }

    @Get(':id')
    @Roles('admin')
    findOne(@Param('id') id): Promise<User> {
      return this.usersService.findOne(id);
    }
  

    @Post()
    @Roles('admin')
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.usersService.create(createUserDto);
    }
  
    @Delete(':id')
    @Roles('admin')
    delete(@Param('id') id): Promise<User> {
      return this.usersService.delete(id);
    }
  
    @Put(':id')
    @Roles('admin')
    update(@Body() updateUserDto: CreateUserDto, @Param('id') id): Promise<User> {
      return this.usersService.update(id, updateUserDto);
    }





}
