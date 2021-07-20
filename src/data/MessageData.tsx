import IMessage from "../Componets/mail.interface";

const MessageData: Array<IMessage> = [
  {
    id: 1,
    importance: "baja",
    attached: true,
    personfor: "Chair Force",
    subject:
      "Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 ",
    sent: "2021-06-03",
    size: "5kb",
    read: true,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 2,
    importance: "alta",
    attached: true,
    personfor: "Chair Force",
    subject:
      "Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 ",
    sent: "2021-06-10",
    size: "5kb",
    read: false,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 3,
    importance: "normal",
    attached: true,
    personfor: "Chair Force",
    subject:
      "Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 ",
    sent: "2021-06-10",
    size: "5kb",
    read: false,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 4,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject:
      "Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 ",
    sent: "2021-06-15",
    size: "51kb",
    read: true,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 5,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject: "Test5 Test5 Test5 Test5 Test5 Test5 Test5 Test5 Test5 Test5 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 6,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject:
      "Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 7,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject: "Test7 Test7 Test7 Test7 Test7 Test7 Test7 Test7 Test7 Test7 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    isdelete: false,
    body: "Al estar escrito en un lenguaje clásico (el más usado está derivado del latín clásico) suele despertar curiosidad saber qué significa. Sin embargo el significado del texto no tiene importancia debido a que si un texto es legible los usuarios suelen centrarse en lo que dice el texto y no en el diseño, que es el objetivo en este caso.",
  },
  {
    id: 8,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject: "Test8 Test8 Test8 Test8 Test8 Test8 Test8 Test8 Test8 Test8 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    isdelete: false,
    body: "Al estar escrito en un lenguaje clásico (el más usado está derivado del latín clásico) suele despertar curiosidad saber qué significa. Sin embargo el significado del texto no tiene importancia debido a que si un texto es legible los usuarios suelen centrarse en lo que dice el texto y no en el diseño, que es el objetivo en este caso.",
  },
  {
    id: 9,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject: "Test9 Test9 Test9 Test9 Test9 Test9 Test9 Test9 Test9 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    isdelete: false,
    body: "Al estar escrito en un <b>lenguaje clásico</b> (el más usado está derivado del latín clásico) suele despertar curiosidad saber qué significa. Sin embargo el significado del texto no tiene importancia debido a que si un texto es legible los usuarios suelen centrarse en lo que dice el texto y no en el diseño, que es el objetivo en este caso.",
  },
  {
    id: 10,
    importance: "alta",
    attached: false,
    personfor: "Chair Force",
    subject:
      "Test10 Test10 Test10 Test10 Test10 Test10 Test10 Test10 Test10 Test10 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    isdelete: false,
    body: "Al estar escrito en un lenguaje clásico (el más usado está derivado del latín clásico) suele despertar curiosidad saber qué significa. Sin embargo el significado del texto no tiene importancia debido a que si un texto es legible los usuarios suelen centrarse en lo que dice el texto y no en el diseño, que es el objetivo en este caso.",
  },
];

export default MessageData;