import { CategorItemProps } from "../../types/Items";
import MainRef from "./MainRef";

const Menu: React.FC<CategorItemProps> = ({ items, className }) => {
  return (
    <div className={className}>
      <ul className="flex items-center gap-5">
        {items.map((value) => (
          <li className="display flex text-xl " key={value._id}>
            <MainRef obj={value} className="hover:text-[#c0cccc] " />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
