export interface User {
  _id: string,
  username: string;
  password: string;
  createdAt: Date;
}

export interface Poll {
  _id: string;
  title: string;
  desc: string;
  closed: boolean;
  choices: [{desc: string, count: number}];
  voted: string[];
  createdAt: Date;
}