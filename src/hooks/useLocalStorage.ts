import { useState, useEffect } from "react";

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => event.key === key && setStoredValue(event.newValue);
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  const setValue = (value: string) => {
    setStoredValue(value);

    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
