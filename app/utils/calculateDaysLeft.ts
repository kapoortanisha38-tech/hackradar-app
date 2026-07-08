export function calculateDaysLeft(deadline: string) {
  const today = new Date();
  const endDate = new Date(deadline);

  const difference = endDate.getTime() - today.getTime();

  const daysLeft = Math.ceil(
    difference / (1000 * 60 * 60 * 24)
  );

  if (daysLeft < 0) {
    return "Closed";
  }

  if (daysLeft === 0) {
    return "Last Day";
  }

  if (daysLeft === 1) {
    return "1 Day Left";
  }

  return `${daysLeft} Days Left`;
}