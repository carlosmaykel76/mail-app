import { IFilter } from "../interfaces/mail.interface";

export const msgEliminar: string =
  "Esta seguro de que desea eliminar el mensaje seleccionado";

export const msgMarcarNoLeido: string =
  "Esta seguro de que desea marcar como no leído mensaje seleccionado";

export const listFilter: Array<IFilter> = [
  {
    id: 1,
    value: "Todo",
  },
  {
    id: 2,
    value: "No leído",
  },
  {
    id: 3,
    value: "Para mi",
  },
  {
    id: 4,
    value: "Marcado",
  },
  {
    id: 5,
    value: "Menciones",
  },
  {
    id: 6,
    value: "Datos adjuntos",
  },
];
