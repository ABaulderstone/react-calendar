import { useState, useEffect, createContext, useContext } from 'react';

/**
 * Screen provider and hook for Twin
 */
const defaultValue = {};

const ScreensContext = createContext(defaultValue);

interface MinScreenProviderProps {
  children: React.ReactNode;
  screens: string;
}

const MinScreenProvider = ({ children, screens }: MinScreenProviderProps) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists: any = {};
    let isAttached = false;

    const mediaData = Object.entries(screens).map(([name, media]) => [
      name,
      `(min-width: ${media})`,
    ]);

    const handleQueryListener = () => {
      const updatedMatches = mediaData.reduce(
        (acc, [name]) => ({
          ...acc,
          [name]: Boolean(
            mediaQueryLists[name] && mediaQueryLists[name].matches
          ),
        }),
        {}
      );
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches: any = {};

      mediaData.forEach(([name, media]) => {
        if (typeof media !== 'string') {
          matches[name] = false;
          return;
        }
        mediaQueryLists[name] = window.matchMedia(media);
        matches[name] = mediaQueryLists[name].matches;
      });

      setQueryMatch(matches);
      isAttached = true;

      mediaData.forEach(([name, media]) => {
        if (typeof media !== 'string') return;
        mediaQueryLists[name].addListener(handleQueryListener);
      });
    }

    return () => {
      if (!isAttached) return;
      mediaData.forEach(([name, media]) => {
        if (typeof media !== 'string') return;
        mediaQueryLists[name].removeListener(handleQueryListener);
      });
    };
  }, [screens]);

  return (
    <ScreensContext.Provider value={queryMatch}>
      {children}
    </ScreensContext.Provider>
  );
};

const useMinScreen = () => {
  const context: any = useContext(ScreensContext);
  if (context === defaultValue)
    throw new Error('useMinScreen must be used within a MinScreenProvider');

  return { min: (size: any) => context[size] };
};

export { useMinScreen, MinScreenProvider };
