export default interface IMessage {
  id: number;
  importance: string;
  attached: boolean;
  personfor: string;
  subject: string;
  sent: string;
  size: string;
  read: boolean;
  isdelete: boolean;
  body: string;
}
