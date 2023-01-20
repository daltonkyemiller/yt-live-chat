export const requestWrapper = async <T>(url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw { status: response.status, statusText: response.statusText, message: data };
  return data as T;
};
