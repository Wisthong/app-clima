import { FormEvent, useEffect, useRef, useState } from "react";

export const SearchBox = ({
  handleSearch,
}: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <form
      id="form"
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("");
      }}
    >
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Buscar ubicación"
        className="absolute w-72 p-3 rounded-full mt-2"
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};
