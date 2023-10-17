import React, { createContext, useState, useContext, ReactNode } from "react";

interface Book {
  [key: string]: any;
}

interface BookContextType {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  filterCriteria: string;
  setFilterCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [filterCriteria, setFilterCriteria] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("");

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        startIndex,
        setStartIndex,
        filterCriteria,
        setFilterCriteria,
        searchString,
        setSearchString,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
}
