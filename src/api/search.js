import { users } from "../users.js";
export const searchUsers = (q) => users.filter(u => u.name.includes(q));
