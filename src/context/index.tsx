import React from 'react';
import { createContext } from 'react';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUsersContext {
  users: IUser[] | null;
}

export const usersContext: any = createContext<IUsersContext>({ users: null });
