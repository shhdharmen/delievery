import {
  Controller,
  Get,
  Post,
  NotFoundException,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyMobileDto } from './dto/verify-mobile.dto';
import { CheckCodeDto } from './dto/check-code.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@Req() req: Request) {
    const userId = '';
    const user = await this.userService.getUser(userId);
    if (!user) throw new NotFoundException('User does not exist!');
    return user;
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.addUser(createUserDto);
    return newUser;
  }

  @Post('verify')
  async verifyMobile(@Body() verifyMobileDto: VerifyMobileDto) {
    const verifying = await this.userService.verifyMobile(verifyMobileDto);
    return verifying;
  }

  @Post('check')
  async checkCode(@Body() checkCodeDto: CheckCodeDto) {
    const checking = await this.userService.checkCode(checkCodeDto);
    return checking;
  }
}
