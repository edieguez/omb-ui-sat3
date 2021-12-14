export const getAccountList: any = {
  resquest: {},
  response: {
    data: [
      {
        id: '1',
        name: 'Jaimito Cartero',
        routingNumber: '1234',
        accountNumber: '9876',
        openDate: '2021-03-28',
        currentBalance: 125,
        dateOfBirth: '1992-10-09',
        accountType: 'CHECKING',
      },
      {
        id: '2',
        name: 'Chente Fernandez',
        routingNumber: '1234',
        accountNumber: '9877',
        openDate: '2020-01-17',
        currentBalance: 0,
        dateOfBirth: '1995-07-19',
        accountType: 'SAVINGS',
      },
    ],
  },
};

export const getAccount: any = {
  resquest: {
    id: '1',
  },
  response: {
    data: {
      id: '1',
      name: 'Jaimito Cartero',
      routingNumber: '1234',
      accountNumber: '9876',
      openDate: '2021-03-28',
      currentBalance: 125,
      dateOfBirth: '1992-10-09',
      accountType: 'CHECKING',
    },
  },
};
