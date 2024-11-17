import { useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState(() => localStorage.getItem(key));

  const setValue = (value: string | null) => {
    setStoredValue(value);

    if (value == null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  }

  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent)
    };
  }, [key]);

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
