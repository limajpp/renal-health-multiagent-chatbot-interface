interface UserMock {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: UserMock[] = [
  {
    id: 1,
    name: "Maria Oliveira",
    email: "maria.oliveira@gmail.com",
    password: "12345678",
  },
  {
    id: 2,
    name: "Carlos Souza",
    email: "carlos.souza@outlook.com",
    password: "XxSenhaQuaseFortexX",
  },
  {
    id: 3,
    name: "Juliano Silva",
    email: "juliano@yahoo.com",
    password: "SenhaTestexd123",
  },
];

export default users;
