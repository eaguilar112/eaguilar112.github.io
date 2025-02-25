/* 
File: footer.js
Collaborators: Kourosh, Karie Israeli, Erwin Aguilar, Lily Power
Date Created: 2025-02-24
Last Modified: 2025-02-24
*/

export default function footer() {
    return (
        <footer className="border-t-2 border-black w-full p-5 mx-auto bg-blue-700 text-white mt-12 py-6 text-center">
            <p className="mb-2">(555) 123-4567</p>
            <p> 123 Education Blvd, Learning City</p>
            <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} New Generation High School
            </p>
      </footer>
    );
  }