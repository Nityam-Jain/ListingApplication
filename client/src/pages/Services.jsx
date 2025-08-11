export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      <p className="max-w-3xl text-center text-gray-700 mb-12">
        We provide professional laptop repair services, including hardware fixes, software installation, diagnostics, and maintenance. 
        Our experienced technicians ensure your laptop runs smoothly and efficiently.
      </p>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hardware Repair */}
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="mx-auto w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1v22m8-11H4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Hardware Repair</h3>
          <p className="text-gray-600">
            Fix issues with screens, keyboards, batteries, motherboards, and other laptop hardware components.
          </p>
        </div>

        {/* Software Installation */}
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="text-blue-500 mb-4">
            <svg
              className="mx-auto w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Software Installation</h3>
          <p className="text-gray-600">
            Install and configure operating systems, antivirus, drivers, and other essential software.
          </p>
        </div>

        {/* Diagnostics & Maintenance */}
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="text-green-500 mb-4">
            <svg
              className="mx-auto w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a4 4 0 014-4h4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11v4h4m-6 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Diagnostics & Maintenance</h3>
          <p className="text-gray-600">
            Comprehensive laptop check-ups, virus removal, cleaning, and performance tuning.
          </p>
        </div>
      </div>
    </div>
  );
}
