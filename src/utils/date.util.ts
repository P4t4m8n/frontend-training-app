const formatDateForInput = (date: Date | string): string => {
  return new Date(date).toISOString().split("T")[0];
};

export const dateUtil = {
  formatDateForInput,
};
