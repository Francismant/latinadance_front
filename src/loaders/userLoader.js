import { getConnectedUser } from "../apis/users";

export async function userLoader() {
  try {
    return await getConnectedUser();
  } catch (error) {
    console.error(error)
  }
}