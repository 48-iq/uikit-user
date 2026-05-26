import { ErrorDto } from "src/error/error.dto";

export class ResultDto<T> {
  success: boolean;
  error?: ErrorDto;
  result?: T;
}
