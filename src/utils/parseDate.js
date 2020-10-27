export const parseDate = (dateString = '') => {
  const [day, month, year] = dateString.split('/');

  return `${year}-${month}-${day}`;
};
