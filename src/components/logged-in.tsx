export default async function LoggedIn() {
  const res = await fetch("http://localhost/api/auth/status");
  const body = await res.json();

  if (body) {
    return <div>Not logged in</div>;
  } else {
    return <div>{body.id} logged in</div>;
  }
}
