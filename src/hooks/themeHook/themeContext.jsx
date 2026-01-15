import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

const DARK_LOCAL_STORAGE_KEY = 'dark';

export const ThemeContext = createContext({
  dark: false, // light default
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false); // ✅ light by default

  const toggleTheme = useCallback(() => {
    setDark((prevDark) => {
      const nextDark = !prevDark;

      localStorage.setItem(
        DARK_LOCAL_STORAGE_KEY,
        JSON.stringify(nextDark),
      );

      document.body.classList.toggle('dark', nextDark);
      document.body.classList.toggle('light', !nextDark);

      return nextDark;
    });
  }, []);

  useEffect(() => {
    const localValueRaw = localStorage.getItem(DARK_LOCAL_STORAGE_KEY);
    const localValue =
      localValueRaw === null ? null : JSON.parse(localValueRaw);

    // ✅ Om inget sparat: starta i light
  
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
