//onchange,onsubmit
function LoginForm() {
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-4 w-2/5"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const username = formData.get("username");
          const password = formData.get("password");
          console.log(username, password);

          fetch("/loginuser", {
            body: {
              username,
              password,
            },
            method: "POST",
          });
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={(e) => {
            // console.log(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => {
            // console.log(e.target.value);
          }}
        />
        <button className="p-4 bg-slate-300">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
