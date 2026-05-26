import { Global, Module } from "@nestjs/common";
import { ErrorMapper } from "./error.mapper";

@Global()
@Module({
  providers: [ErrorMapper],
  exports: [ErrorMapper],
  
})
export class ErrorModule {}