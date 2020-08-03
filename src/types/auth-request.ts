import { Request } from 'express';


interface AuthRequest extends Request {
  user: {
    id: any, // TODO: fix me!
  };
}

export { AuthRequest }
