/* 
File: displayStudentData.js
Collaborators: Kourosh, Karie Israeli, Erwin Aguilar, Lily Power
Date Created: 2025-02-24
Last Modified: 2025-02-24
*/

export default function displayStudentData({ student }) {
    return (
        <div className="border p-4 rounded-lg shadow-sm max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
                {student.firstName} {student.lastName}
            </h2>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
                <p>Date of Birth:</p>
                <p>{student.dob}</p>
                <p>Grade:</p>
                <p>{student.grade}</p>
            </div>
        </div>
    );
}