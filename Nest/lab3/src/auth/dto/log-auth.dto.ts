import { IsNotEmpty, IsString } from "class-validator";

export class LogAuthDto {
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}
