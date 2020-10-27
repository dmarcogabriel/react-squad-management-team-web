export const showPlayerInitials = (playerName) => {
  return playerName
    .split(' ')
    .map((name) => name[0])
    .join('');
};
