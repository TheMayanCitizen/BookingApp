export const getConfigToken = (): { headers: { Authorization: string } } => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
