import { RequestParam } from "../types/character";
import axios from "../utils/axios";

export const getCharacters = (params: RequestParam) =>
  axios.get(`/characters`, {
    params,
  });
