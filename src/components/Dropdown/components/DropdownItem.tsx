import "./style.scss";

type DropdownItemType = {
  icon: string | undefined;
  name: string | undefined;
  commission: string | undefined;
}

export const DropdownItem = ({
  icon,
  name,
  commission,
}: DropdownItemType) => {
  return (
    <div className="dropdown__selected">
      <img src={`src/assets/logos/${icon}`} alt="mastercard"/>
      <div className="dropdown__info">
        <p>{name}</p>
        <p>Commission {commission}</p>
        <p>Please notice that you will send money in the USD</p>
      </div>
    </div>
  );
};
