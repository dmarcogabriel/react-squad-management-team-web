export default {
  create: () => {},
  get: () => {
    Promise.resolve({
      data: {
        data: [
          {
            id: 0,
            name: 'Player one',
          },
          {
            id: 1,
            name: 'Player two',
          },
        ],
      },
    });
  },
};
