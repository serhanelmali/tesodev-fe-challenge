import PersonInfo from "../../components/PersonInfo/PersonInfo";
import { useAppContext } from "../../../context/store";
import "./searchresults.scss";

const SearchResults = () => {
  const store = useAppContext();
  const persons = store?.persons.data;
  console.log(persons);

  return (
    <div className="search-results__container">
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
    </div>
  );
};

export default SearchResults;
