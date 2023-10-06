import { WithId } from 'mongodb';
import { SimpleUser } from './types/auth.types'
import { Ressource } from './types/ressources.types';

declare global {
    namespace Express {
      export interface Request {
        user?: WithId<SimpleUser> | null;
        ressource?: WithId<Ressource> | null;
        item?: WithId<Item> | null;
      }
    }
}
