import { validateFormation } from '../validators';

const mockFormation352 = [
  {
    id: 'c1',
    colNumber: 3,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl2',
        player: null,
      },
      {
        position: 'pl3',
        player: null,
      },
    ],
  },
  {
    id: 'c2',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl12',
        player: null,
      },
      {
        position: 'pl3',
        player: null,
      },
      {
        position: 'pl4',
        player: null,
      },
      {
        position: 'pl5',
        player: null,
      },
    ],
  },
  {
    id: 'c3',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl12',
        player: null,
      },
    ],
  },
  {
    id: 'c4',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
    ],
  },
];

const mockFormation352WithOnePlayer = [
  {
    id: 'c1',
    colNumber: 3,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl2',
        player: null,
      },
      {
        position: 'pl3',
        player: null,
      },
    ],
  },
  {
    id: 'c2',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl12',
        player: null,
      },
      {
        position: 'pl3',
        player: null,
      },
      {
        position: 'pl4',
        player: null,
      },
      {
        position: 'pl5',
        player: null,
      },
    ],
  },
  {
    id: 'c3',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl12',
        player: null,
      },
    ],
  },
  {
    id: 'c4',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
    ],
  },
];
const mockFormation352WithAllPlayers = [
  {
    id: 'c1',
    colNumber: 3,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl2',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl3',
        player: {
          player_id: '1',
        },
      },
    ],
  },
  {
    id: 'c2',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl12',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl3',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl4',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl5',
        player: {
          player_id: '1',
        },
      },
    ],
  },
  {
    id: 'c3',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
      {
        position: 'pl12',
        player: {
          player_id: '1',
        },
      },
    ],
  },
  {
    id: 'c4',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: {
          player_id: '1',
        },
      },
    ],
  },
];

describe('validators util tests', () => {
  it('should return false for no player', () => {
    const result = validateFormation(mockFormation352);

    expect(result).toEqual(false);
  });

  it('should return false for one player only', () => {
    const result = validateFormation(mockFormation352WithOnePlayer);

    expect(result).toEqual(false);
  });

  it('should return true for all players presents', () => {
    const result = validateFormation(mockFormation352WithAllPlayers);

    expect(result).toEqual(true);
  });

  it('should return false for not passing any params', () => {
    const result = validateFormation();

    expect(result).toEqual(false);
  });
});
