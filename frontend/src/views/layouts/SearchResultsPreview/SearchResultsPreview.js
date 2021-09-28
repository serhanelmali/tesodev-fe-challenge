import PersonInfo from "../../components/PersonInfo/PersonInfo";
import { useAppContext } from "../../../context/store";
import "./searchresultspreview.scss";

const SearchResultsPreview = () => {
  const store = useAppContext();
  const persons = store?.persons.data;

  return (
    <div
      className="search-results__container"
      style={persons.length <= 0 ? { opacity: 0 } : { opacity: 1 }}
    >
      {persons &&
        persons
          .slice(0, 3)
          .map((person, id) => (
            <PersonInfo
              country={person.country}
              city={person.city}
              email={person.email}
              fullname={person.fullname}
              date={person.date}
              key={id}
            />
          ))}

      <button className="search-results__container">Show more...</button>
    </div>
  );
};

export default SearchResultsPreview;
