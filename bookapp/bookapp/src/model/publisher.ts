import { State } from "./state";

export interface Publisher {
    publisherid: number;
    name: string;
    city: string;
    state: State;
  }