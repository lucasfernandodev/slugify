import { useEffect, useState } from "react";


export const useLocalstorage = <T extends unknown>(key: string, defaultValue: T):[value: T, setValue: React.Dispatch<React.SetStateAction<T>>] => {

  const [value, setValue] = useState<T>(() => {
    const isStoredValue = localStorage.getItem(key);
    if (isStoredValue) {
      return JSON.parse(isStoredValue)
    }
    return defaultValue;
  })


  useEffect(() => {
    if (value === undefined) return;
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, setValue])

  return [value, setValue]
}