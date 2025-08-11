export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="max-w-3xl text-center text-gray-700 mb-8">
        Welcome to our company! We are passionate about building quality software solutions
        that make life easier for our users. Our team consists of dedicated professionals
        who believe in innovation, transparency, and customer satisfaction.
      </p>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow text-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Team Member 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Team Member 2"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-gray-600">Lead Developer</p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <img
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="Team Member 3"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Mike Johnson</h3>
          <p className="text-gray-600">Product Manager</p>
        </div>
      </div>
    </div>
  );
}
