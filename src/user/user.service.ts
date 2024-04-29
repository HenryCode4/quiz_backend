import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  async doUserRegistration(createUserDto: CreateUserDto): Promise<User>{

    

    const user = new User();
    
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
   

    return await user.save()
  }
}
