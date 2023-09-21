import Dropdown from "../Dropdown/index";
import { colorOptions, options } from "../../constants";

const Filters = ({
  value,
  color,
  onColorChange,
  onSelect,
}: {
  value: string;
  color?: string;
  onColorChange: (value: string) => void;
  onSelect: (value: string) => void;
}) => {
  return (
    <div className="flex justify-end gap-4">
      <Dropdown
        id="color-dropdown"
        value={color}
        title="Color"
        options={colorOptions}
        onSelect={onColorChange}
      />
      <Dropdown
        id="order-dropdown"
        value={value}
        title="Order By"
        options={options}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Filters;
