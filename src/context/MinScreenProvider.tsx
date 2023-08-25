import { useState, useEffect, createContext, useContext } from 'react';
import { Matches, MediaDataItem, Screens, Size } from '../../types/min-screen';

/**
 * Screen provider and hook for Twin
 */

// Code mostly from https://gist.github.com/ben-rogerson/b4b406dffcc18ae02f8a6c8c97bb58a8
const defaultValue = {};

const ScreensContext = createContext(defaultValue);

interface MinScreenProviderProps {
  children: React.ReactNode;
  screens: Screens;
}

const MinScreenProvider = ({ children, screens }: MinScreenProviderProps) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists: any = {};

    let isAttached = false;

    const mediaData: MediaDataItem[] = Object.entries(screens).map(
      ([name, media]) => [name as Size, `(min-width: ${media})`]
    );

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
      console.log(mediaQueryLists);
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches: Matches = {};

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
