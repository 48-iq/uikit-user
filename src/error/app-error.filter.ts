
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppError } from './app.error';

@Catch(AppError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(error: AppError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(error.code)
      .json({
        code: error.code,
        errorType: error.errorType,
        message: error.message,
        timestamp: new Date().toISOString(),
      });
  }
}
