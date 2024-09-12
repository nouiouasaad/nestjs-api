import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "./data-source";

export const DBConfig = TypeOrmModule.forRoot(dataSourceOptions);