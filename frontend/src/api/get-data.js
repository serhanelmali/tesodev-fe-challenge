import axios from "axios";

const getPersons = async ({ onSucces, onError } = {}, value) => {
  try {
    const result = await axios(value);
    if (onSuccess) onSucces(result);
    return result;
  } catch (err) {
    if (onError) onError(err);
  }
};

export default getPersons;
