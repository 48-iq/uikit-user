import { AppError } from "./app.error"

export const errors =  {
  USER_NOT_FOUND: new AppError({ 
    message: 'User not found', 
    errorType: 'USER_NOT_FOUND', 
    code: 404 
  }),

  FORBIDDEN: new AppError({
    message: 'Forbidden',
    errorType: 'FORBIDDEN',
    code: 403
  }),

  USER_ALREADY_EXISTS: new AppError({
    message: 'User already exists, try another username',
    errorType: 'USER_ALREADY_EXISTS',
    code: 409
  }),

  BAD_REQUEST: new AppError({
    message: 'Try again with correct data',
    errorType: 'BAD_REQUEST',
    code: 400
  }),
} satisfies Record<string, AppError>