import { useAppDispatch } from "../../app/hooks.ts";
import { openMenu } from "../../features/menu/menuSlice.ts";
import { ContextButton } from "../Buttons/ContextButton.tsx";
import { Menu } from "../Menu/Menu.tsx";
import "./style.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  
  const handleOpenMenu = () => dispatch(openMenu());
  
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <button
            className="header__menu"
            onClick={handleOpenMenu}
          >
            <img src="src/assets/icons/burger.svg" alt="main-logo" className="header__menu--icon"/>
            <img src="src/assets/logos/main-logo.svg" alt="main-logo" className="header__logo"/>
          </button>
          <div className="header__actions">
            <ul className="header__group">
              <li className="header__item">
                <img src="src/assets/icons/search.svg" alt="search" className="header__icon"/>
              </li>
              <li className="header__item">
                <img src="src/assets/icons/gift.svg" alt="search" className="header__icon"/>
              </li>
              <li className="header__item">
                <img src="src/assets/icons/bell.svg" alt="search" className="header__icon"/>
              </li>
            </ul>
            <ContextButton/>
            <div className="header__avatar">
              <img src="src/assets/user-avatar.png" alt="" className="header__avatar--image"/>
            </div>
          </div>
        </div>
      </header>
      <Menu/>
    </>
  );
};
