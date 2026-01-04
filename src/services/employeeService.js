const STORAGE_KEY = "employees";

export const getEmployees = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveEmployees = (employees) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};
