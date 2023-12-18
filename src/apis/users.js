const API_USERS = "/api/users";


export async function createUser(newUser) {
  console.log("CreateUser", newUser);
  try {
    const { email, userValues } = newUser;
    const { name, password } = userValues;

    const response = await fetch(`${API_USERS}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });

    const backResponse = await response.json();

    if (response.ok) {
      return backResponse;
    } else {
      if (backResponse) {
        throw new Error(backResponse);
      }
    }
  } catch (error) {
    throw error;
  }
}



export async function createNewPassword(newPassword) {
  console.log("createNewPassword", newPassword);
  try {
    const { email, password } = newPassword;
    const response = await fetch(`${API_USERS}/changePassword`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const backResponse = await response.json();
    if (response.ok) {
      return backResponse;
    } else {
      if (backResponse) {
        throw new Error(backResponse.error || "Erreur inconnue");
      }
    }
  } catch (error) {
    throw error;
  }
}



export async function signin(values) {
  const response = await fetch(`${API_USERS}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error API login");
    }
  }
}

export async function signout() {
  const response = await fetch(`${API_USERS}/logout`);
  console.log(response);
}

export async function getConnectedUser() {
  const response = await fetch(`${API_USERS}/userConnected`);
  const userC = await response.json();
  console.log(userC);
  return userC;
}
