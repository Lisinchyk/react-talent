import "./style.scss";

type CardsProps = {
  status: string;
  name: string;
  icon: string;
  commission: string;
  onClick: () => void;
};

export const Cards = ({
  status,
  name,
  icon,
  commission,
  onClick
}: CardsProps) => (
  <button
    className="card__button"
    onClick={onClick}
  >
    <div className="card">
      {status && <span className={`card__badge ${status}`}>{status}</span>}
      <div className="card__logo-wrapper">
        <img src={`/assets/logos/${icon}`} className="card__logo" alt="card-logo-icon"/>
      </div>
      <h4 className="card__title">{name}</h4>
      <p className="card__info">Commission {commission}</p>
    </div>
  </button>
);
