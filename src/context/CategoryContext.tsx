'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type CategoryContextType = {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('Python');

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
}