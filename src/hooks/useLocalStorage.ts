import { useState } from "react";

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => localStorage.getItem(key));

  const setValue = (value: string | null) => {
    setStoredValue(value);

    if (value == null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  }

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
