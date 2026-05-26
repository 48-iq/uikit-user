import { HttpException } from "@nestjs/common";


export class AppError extends HttpException  {

  errorType: string;
  code: number;

  constructor(args: {
    message?: string;
    errorType: string;
    code: number;
  }) {
    const { message, errorType, code } = args;
    super(
      {
        message: message,
        errorType: errorType,
      },
      code,
    );

    this.message = message || 'An error occurred';
    this.errorType = errorType;
    this.code = code;
  }
}