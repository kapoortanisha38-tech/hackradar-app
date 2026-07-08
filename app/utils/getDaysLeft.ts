export function getDaysLeft(deadline: string) {
  const today = new Date();
  const deadlineDate = new Date(deadline);

  const differenceInTime = deadlineDate.getTime() - today.getTime();

  const daysLeft = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) {
    return "Expired";
  }

  if (daysLeft === 0) {
    return "Last day";
  }

  if (daysLeft === 1) {
    return "1 day left";
  }

  return `${daysLeft} days left`;
}