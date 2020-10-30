export const parseDate = (dateString = '') => {
  if (!dateString) return null;

  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};
