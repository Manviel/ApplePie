const timeSince = () => {
  const today = new Date();
  const firstDay = new Date(2018, 9, 1);

  let diff = (today.getTime() - firstDay.getTime()) / 1000;

  diff /= 60 * 60 * 24 * 7 * 4;

  return `${Math.abs(Math.round(diff))} months`;
};

document.getElementById("exp").innerText = timeSince();
