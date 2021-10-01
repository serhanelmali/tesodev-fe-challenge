import axios from "axios";

const getPersons = async ({ onSuccess, onError } = {}, value) => {
  try {
    const result = await axios(`/search?searchterm=${value}`);
    if (onSuccess) onSuccess(result);
    return result;
  } catch (err) {
    if (onError) onError(err);
  }
};

export default getPersons;
