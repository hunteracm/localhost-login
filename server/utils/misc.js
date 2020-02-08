exports.today = () => {
  const now = new Date();

  const yyyy = now.getFullYear();
  const mm = `${now.getMonth() < 10 + 1 ? "0" : ""}${now.getMonth() + 1}`;
  const dd = `${now.getDate() < 10 ? "0" : ""}${now.getDate()}`;

  return `${yyyy}-${mm}-${dd}`;
};
