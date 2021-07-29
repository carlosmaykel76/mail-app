export interface IAccountMail {
  id: number;
  fav: boolean;
  cuenta: string;
  usuario: string;
  servidor: string;
  imapServer: string;
  imapPort: number;
  imapUser: string;
  imapPwd: string;
  imapCifrado: string;
  smtpServer: string;
  smtpPort: number;
  smtpUser: string;
  smtpPwd: string;
  smptCifrado: string;
}

/* export const initAccountMail = {
  id: 0,
  fav: false,
  cuenta: "",
  usuario: "",
  servidor: "",
  imapServer: "",
  imapPort: 0,
  imapUser: "",
  imapPwd: "",
  imapCifrado: "",
  smtpServer: "",
  smtpPort: 0,
  smtpUser: "",
  smtpPwd: "",
  smptCifrado: "",
}; */

export const AccountMailData: Array<IAccountMail> = [
  {
    id: 1,
    fav: true,
    cuenta: "pepe@gmail.com",
    usuario: "pepe",
    servidor: "10.12.5.2",
    imapServer: "10.12.5.2",
    imapPort: 993,
    imapUser: "pepe",
    imapPwd: "123456aA",
    imapCifrado: "Auto",
    smtpServer: "10.12.5.2",
    smtpPort: 565,
    smtpUser: "pepe",
    smtpPwd: "123456aA",
    smptCifrado: "Auto",
  },
  {
    id: 2,
    fav: false,
    cuenta: "carlos.lopez@telematel.com",
    usuario: "carlos.lopez",
    servidor: "10.235.1.201",
    imapServer: "10.235.1.201",
    imapPort: 993,
    imapUser: "carlos.lopez",
    imapPwd: "123456aA",
    imapCifrado: "STARTTLS",
    smtpServer: "10.235.1.201",
    smtpPort: 565,
    smtpUser: "carlos.lopez",
    smtpPwd: "123456aA",
    smptCifrado: "STARTTLS",
  },
  {
    id: 3,
    fav: false,
    cuenta: "gelsy.crego@telematel.com",
    usuario: "gelsy.crego",
    servidor: "10.235.1.201",
    imapServer: "10.235.1.201",
    imapPort: 993,
    imapUser: "gelsy.crego",
    imapPwd: "123456aA",
    imapCifrado: "SSL",
    smtpServer: "10.235.1.201",
    smtpPort: 565,
    smtpUser: "gelsy.crego",
    smtpPwd: "123456aA",
    smptCifrado: "SSL",
  },
];

//export default AccountMailData;
