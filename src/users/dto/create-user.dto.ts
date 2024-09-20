import { IsDate} from "class-validator";
import { BaseUserDto } from "./base-user.dto";

export class CreateUserDto extends BaseUserDto {
    @IsDate()
    readonly createdAt: Date;
    @IsDate()
    readonly updatedAt: Date;
}