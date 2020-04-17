import { IsString } from 'class-validator';

export class CheckCodeDto {
  @IsString()
  readonly mobile: string;

  @IsString()
  readonly code: string;
}