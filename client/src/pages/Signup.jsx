export default function SignUpPage() {
    return (
        <section className="flex flex-col items-center rounded-lg justify-center min-h-screen bg-gray-100 px-4">

            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded w-64 py-2 px-3 mb-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border rounded w-64 py-2 px-3 mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border rounded w-64 py-2 px-3 mb-6"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-50 py-2 rounded">
                    Create Account
                </button>
            </form>

        </section>
    );
}
