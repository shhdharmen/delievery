import { IsInt, IsString, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly fullName: string;

  @IsString()
  readonly countryCode: string;

  @IsString()
  readonly phone: string;

  @IsBoolean()
  readonly verified: boolean;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
