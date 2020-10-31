export default {
  create: () => {},
  get: () => {
    Promise.resolve({
      data: {
        data: [
          {
            id: 0,
            player_id: 1,
            name: 'Player one',
          },
          {
            id: 1,
            player_id: 2,
            name: 'Player two',
          },
        ],
      },
    });
  },
};
