import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name?: string;
  @IsString()
  email: string;
  @IsString()
  universityId: string;
  @IsString()
  password: string;
  @IsString()
  @IsOptional()
  passwordHash?: string;
  @IsNumber()
  chatId?: number;
}

export class LoginUserDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
}

export class EmailCheckDto {
  @IsString()
  email: string;
}
