export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  // validation...

  if (!email.trim().includes("@") || !email.trim().includes(".")) {
    return new Response("Email should contain '@' and '.' symbols", {
      status: 400,
    });
  }

  if (
    name.trim().length < 2 ||
    !/[A-Z]/.test(name.trim()) ||
    !/[a-z]/.test(name.trim())
  ) {
    return new Response(
      "Name should contain at least 2 symbols, upper and lower case symbols",
      {
        status: 400,
      }
    );
  }

  if (
    password.trim().length < 6 ||
    !/[A-Z]/.test(password.trim()) ||
    !/[a-z]/.test(password.trim()) ||
    !/\d/.test(password.trim())
  ) {
    return new Response(
      "Should contain at least 6 symbols, upper and lower case symbols and numbers",
      { status: 400 }
    );
  }

  // Simulate server request...

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("User created successfully");

  return new Response("User has been created", { status: 201 });
};
