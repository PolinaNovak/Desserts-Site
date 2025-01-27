interface useSessionStorageRes {
  addToStorage: <T>(name: string, item: T) => void;
  removeFromStorage: (name: string) => void;
  getFromStorage: (name: string) => any;
  clearStorage: () => void;
}

export const useSessionStorage = (): useSessionStorageRes => {
  const addToStorage = <T>(name: string, item: T): void =>
    sessionStorage.setItem(name, JSON.stringify(item));

  const getFromStorage = (name: string): any => sessionStorage.getItem(name);

  const removeFromStorage = (name: string): void =>
    sessionStorage.removeItem(name);

  const clearStorage = (): void => sessionStorage.clear();

  return { addToStorage, removeFromStorage, getFromStorage, clearStorage };
};

export const getFromStorage = (name: string): any =>
  sessionStorage.getItem(name);
