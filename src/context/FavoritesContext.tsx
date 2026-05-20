import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type FavoriteCity = {
  name: string;
  temperature: number;
  condition: string;
};

type FavoritesContextType = {
  favorites: FavoriteCity[];

  addFavorite: (
    city: FavoriteCity
  ) => void;

  removeFavorite: (
    name: string
  ) => void;
};

const FavoritesContext =
  createContext<
    FavoritesContextType | undefined
  >(undefined);

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] =
    useState<FavoriteCity[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(
    city: FavoriteCity
  ) {
    setFavorites((prev) => {
      const alreadyExists =
        prev.some(
          (fav) => fav.name === city.name
        );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, city];
    });
  }

  function removeFavorite(
    name: string
  ) {
    setFavorites((prev) =>
      prev.filter(
        (city) => city.name !== name
      )
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context =
    useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites precisa estar dentro do FavoritesProvider"
    );
  }

  return context;
}