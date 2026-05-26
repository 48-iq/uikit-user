import { Injectable } from "@nestjs/common";
import { AppError } from "./app.error";
import { ErrorDto } from "./error.dto";

@Injectable()
export class ErrorMapper {

  toDto(error: AppError) {
    const dto = new ErrorDto();
    dto.message = error.message;
    dto.errorType = error.errorType;
    dto.code = error.code;
    return dto;
  }
}