import { FocusEvent, useState } from "react";
import { isFromMenu } from "../../helpers";
import { DropdownOption } from "../../types";

const classes = {
  dropdown: "relative inline-block text-left",
  button:
    "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
  options:
    "py-1 absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
  optionItem: "cursor-pointer text-gray-700 block px-4 py-2 text-sm disabled:bg-gray-200",
};

const Dropdown = ({
  id,
  value,
  title,
  onSelect,
  options,
}: {
  id: string
  value?: string
  title: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const closeMenu = (event?: FocusEvent<HTMLButtonElement | HTMLUListElement, Element>) => {
    if(isFromMenu(id, event?.relatedTarget)) {
      return 
    }

    setOpen(false);
  };

  const toggleMenu = () => setOpen(true);

  const handleSelect = (newValue: string) => {
    // prevent action from being updated with the same value
    if(value === newValue) return

    onSelect(newValue)
    closeMenu(undefined)
  }

  return (
    <div className={classes.dropdown}>
      <div>
        <button
          type="button"
          className={classes.button}
          id={id}
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleMenu}
          onBlur={closeMenu}
        >
          {title}
        </button>
      </div>

      {open && (
        <ul
          className={classes.options}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={id}
          tabIndex={-1}
          onBlur={closeMenu}
        >
          {options.map((option, index) => (
            <li
              className={`${classes.optionItem} ${value === option.value ? 'bg-gray-200 hover:bg-gray-200' : 'hover:bg-gray-50'}`}
              role="menuitem"
              tabIndex={-1}
              id={`${id}-item-${index}`}
              key={`${option.name}-${index}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
