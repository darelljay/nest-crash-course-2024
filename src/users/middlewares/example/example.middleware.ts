import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log('Example Middleware');
    console.log(req.headers.authorization);
    const {authorization} = req.headers;

    if(!authorization) throw new HttpException('No authorization token',HttpStatus.FORBIDDEN);

    if(authorization === 'imHimnigga') next()
    else 
       throw new HttpException(
        'Invalid Authorization Token',
        HttpStatus.FORBIDDEN
      ); 
  }
}
