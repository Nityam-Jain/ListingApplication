export default function LogInPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full py-2 px-3 mb-6"
        />
        <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded">
          Log In
        </button>
      </form>
    </section>
  );
}
