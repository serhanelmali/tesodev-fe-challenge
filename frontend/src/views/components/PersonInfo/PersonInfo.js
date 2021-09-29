import "./PersonInfo.scss";

const PersonInfo = ({ country, city, email, fullname, date }) => {
  return (
    <div className="person__container">
      <div className="person__container__wrapper">
        <div className="person__top">
          <span className="person__top__origin">
            {country} - {city}
          </span>
          <span className="person__top__mail">Email: {email}</span>
        </div>
        <span className="person__name">
          {fullname} - {date.substr(date.length - 4)}
        </span>
      </div>
    </div>
  );
};

export default PersonInfo;
