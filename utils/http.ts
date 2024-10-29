export async function createUser(
  email: string,
  name: string,
  password: string
) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });

    return response;
  } catch (error) {
    throw new Error("Could not create user");
  }
}

export async function login(login: boolean) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (login) {
    console.log("User login successfully");

    return new Response("User login successfully", { status: 200 });
  } else {
    console.log("Could not login");
    return new Response("Could not login", {
      status: 500,
    });
  }
}
