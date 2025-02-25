export default function footer() {
    return (
        <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">(555) 123-4567</p>
          <p> 123 Education Blvd, Learning City</p>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} New Generation High School
          </p>
        </div>
      </footer>
    );
  }