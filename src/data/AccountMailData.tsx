export interface IAccountMail {
  id: number;
  fav: boolean;
  cuenta: string;
  usuario: string;
  servidor: string;
}

const AccountMailData: Array<IAccountMail> = [
  {
    id: 1,
    fav: true,
    cuenta: "pepe@gmail.com",
    usuario: "pepe",
    servidor: "10.12.5.2",
  },
  {
    id: 2,
    fav: false,
    cuenta: "carlos.lopez@telematel.com",
    usuario: "carlos.lopez",
    servidor: "10.235.1.201",
  },
  {
    id: 3,
    fav: false,
    cuenta: "gelsy.crego@telematel.com",
    usuario: "gelsy.crego",
    servidor: "10.235.1.201",
  },
];

export default AccountMailData;
