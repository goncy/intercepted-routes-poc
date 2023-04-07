const USER = {
  name: "goncy",
};

export default function UserInterceptedPage() {
  return (
    <div>
      <h1>{USER.name}</h1>
      <span>This is an intercepted route</span>
    </div>
  );
}
