function ConditionalRendering() {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <div>Hello user</div>
  ) : (
    <div>You are not logged in</div>
  );
}

export default ConditionalRendering;
