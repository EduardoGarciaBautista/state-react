import { BASE_API_URL } from "../utils/constants";

export async function fetchCharacters() {
  const URL = `${BASE_API_URL}/Characters`;
  const result = await fetch(URL);
  return await result.json();
}
