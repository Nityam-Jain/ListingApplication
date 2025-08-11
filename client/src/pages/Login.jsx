export default function LogInPage() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded w-64 py-2 px-3 mb-4 mx-auto block"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border rounded w-64 py-2 px-3 mb-6 mx-auto block"
                    />
                    <button className="bg-green-500 hover:bg-green-600 text-white w-48 py-2 rounded mx-auto block">
                        Log In
                    </button>
                </form>
            </div>

        </section>
    );
}
