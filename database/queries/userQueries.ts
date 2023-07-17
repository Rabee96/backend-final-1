import { User } from "../../models";

export function readUserByEmail(email: string): Promise<User | null> {
  return User.findOne({ where: { email } });
}

export async function createUser(user: User): Promise<number | null> {
  const { firstName, lastName, email, password } = user;
  const result = await User.create({ firstName, lastName, email, password });
  return result ? result.id : null;
}
