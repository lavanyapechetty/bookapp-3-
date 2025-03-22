import { PurchaseLog } from "./purchaselog";
 
export interface Users {
  userid: number;
  firstname: string;
  lastname: string;
  phonenumber: string;
  password: string;
  rolenumber: number;
  username: string;
  purchaseLogs: PurchaseLog[];
}