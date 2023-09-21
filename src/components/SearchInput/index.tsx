import { FormEvent, useState } from "react";

const classes = {
  label: "mb-2 text-sm font-medium text-gray-900 sr-only",
  input:
    "block w-full p-4 pr-24 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500",
  submit:
    "disabled:bg-gray-300 disabled:cursor-not-allowed text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2",
  form: "max-w-[32rem] w-full px-4",
};

const SearchInput = ({
  placeholder,
  onSubmit,
}: {
  placeholder: string;
  onSubmit: (value: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="search" className={classes.label}>
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          value={value}
          className={classes.input}
          placeholder={placeholder}
          required
          onChange={(event) => setValue(event.target.value)}
        />
        <button disabled={!value} type="submit" className={classes.submit}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
