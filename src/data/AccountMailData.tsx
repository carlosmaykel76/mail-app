interface IAccountMail {
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

const AccountMailData: Array<IAccountMail> = [
  {
    id: 1,
    fav: true,
    cuenta: "pepe@gmail.com",
    usuario: "pepe",
    servidor: "10.12.5.2",
    imapServer: "",
    imapPort: 993,
    imapUser: "",
    imapPwd: "",
    imapCifrado: "",
    smtpServer: "",
    smtpPort: 565,
    smtpUser: "",
    smtpPwd: "",
    smptCifrado: "",
  },
  {
    id: 2,
    fav: false,
    cuenta: "carlos.lopez@telematel.com",
    usuario: "carlos.lopez",
    servidor: "10.235.1.201",
    imapServer: "",
    imapPort: 993,
    imapUser: "",
    imapPwd: "",
    imapCifrado: "SSL",
    smtpServer: "",
    smtpPort: 565,
    smtpUser: "",
    smtpPwd: "",
    smptCifrado: "SSL",
  },
  {
    id: 3,
    fav: false,
    cuenta: "gelsy.crego@telematel.com",
    usuario: "gelsy.crego",
    servidor: "10.235.1.201",
    imapServer: "",
    imapPort: 993,
    imapUser: "",
    imapPwd: "",
    imapCifrado: "SSL",
    smtpServer: "",
    smtpPort: 565,
    smtpUser: "",
    smtpPwd: "",
    smptCifrado: "SSL",
  },
];

export default AccountMailData;
