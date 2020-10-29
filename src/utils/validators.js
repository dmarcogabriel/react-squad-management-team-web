export const validateFormation = (formation = []) => {
  let count = 0;

  formation.forEach((f) => {
    f.players.forEach((p) => {
      if (p.player) {
        count++;
      }
    });
  });

  if (count === 11) return true;
  return false;
};
