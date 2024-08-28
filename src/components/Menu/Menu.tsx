import "./style.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { closeMenu, selectIsMenuOpen } from "../../features/menu/menuSlice.ts";

const menuItems = [
  "Casino Games",
  "Live Games",
  "TV-Bet",
  "Sport Games",
  "Virtual",
  "Tournaments",
  "Spin Shop",
  "FAQ",
  "Support Chat"
];

export const Menu = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsMenuOpen);
  
  const handleCloseMenu = () => dispatch(closeMenu());
  
  const open = isOpen ? "open" : "";
  
  return (
    <div className={`menu ${open}`}>
      <div className="menu__header">
        <img src="/assets/logos/main-logo-small.svg" alt="logo" className="menu__logo" />
        <button
          className="menu__close-button"
          onClick={handleCloseMenu}
        >
          <img src="/assets/icons/close.svg" alt="close-button-icon"/>
        </button>
      </div>
      <ul className="menu__list">
        {menuItems.map(item => (
          <li className="menu__item" key={item}>
            <a href="#" className="menu__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
