import { Users } from './users';
import { Book } from './book';
 
export class ShoppingCart {
  constructor(public users: Users, public book: Book) {}
}