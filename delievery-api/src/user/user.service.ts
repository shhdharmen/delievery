import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Twilio } from 'twilio';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { VerifyMobileDto } from './dto/verify-mobile.dto';
import { CheckCodeDto } from './dto/check-code.dto';

@Injectable()
export class UserService {
  twilioClient = new Twilio(
    this.configService.get<string>('TWILIO_ACCOUNT_SID'),
    this.configService.get<string>('TWILIO_AUTH_TOKEN'),
  );
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private configService: ConfigService,
  ) {}

  async getUser(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();
    return user;
  }

  async verifyMobile(verifyMobileDto: VerifyMobileDto): Promise<any> {
    return this.twilioClient.verify
      .services(this.configService.get<string>('TWILIO_VERIFY_SERVICE_ID'))
      .verifications.create({ to: verifyMobileDto.mobile, channel: 'sms' });
  }

  async checkCode(checkCodeDto: CheckCodeDto): Promise<any> {
    return this.twilioClient.verify
      .services(this.configService.get<string>('TWILIO_VERIFY_SERVICE_ID'))
      .verificationChecks.create({
        to: checkCodeDto.mobile,
        code: checkCodeDto.code,
      });
  }

  async addUser(createUserDTO: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.userModel.create(createUserDTO);
      return newUser.save();
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async editUser(userId: string, createUserDTO: CreateUserDto): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userId,
      createUserDTO,
    );
    return editedUser;
  }

  async findOneByEmail(email): Promise<User> {
    return await this.userModel.findOne({ email: email });
  }
}
