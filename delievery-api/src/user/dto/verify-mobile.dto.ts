import { IsString } from 'class-validator';

export class VerifyMobileDto {
  @IsString()
  readonly mobile: string;
}