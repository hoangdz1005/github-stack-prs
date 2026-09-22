import { searchUsers } from "../api/search.js";
export const render = (q) => searchUsers(q).map(u => `<li>${u.name}</li>`).join("");