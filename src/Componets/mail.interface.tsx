export interface IMessage {
  id: number;
  importance: string;
  attached: boolean;
  personfor: string;
  email: string;
  subject: string;
  sent: string;
  size: string;
  read: boolean;
  marked: boolean;
  isdelete: boolean;
  body: string;
}

export interface IFilter {
  id: number;
  value: string;
}

export interface IContacts {
  inputValue?: string;
  nombre: string;
  email?: string;
}