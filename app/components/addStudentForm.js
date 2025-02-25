/* 
File: addStudentForm.js
Collaborators: Kourosh, Karie Israeli, Erwin Aguilar, Lily Power
Date Created: 2025-02-24
Last Modified: 2025-02-24
*/

'use client';
import { useState } from 'react';

// Title: Add Student Form
export default function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: ''
  });
  
  const [errors, setErrors] = useState({});

// validateForm function to check if form fields are filled out correctly
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.grade) newErrors.grade = 'Grade is required';
    
    // Check if date of birth is in the future
    if (formData.dob) {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      if (dobDate > today) newErrors.dob = 'Date cannot be in the future';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      onAddStudent(formData);
      setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // handleSubmit function to handle form submission
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            {/* Add a text input for first name */}

          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>

          <input
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md text-gray-700 mb-1 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John"
          />

          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        
        </div>

        {/* Add a text input for last name */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>

          <input
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md text-gray-700 mb-1 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Doe"
          />

          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}

        </div>

        <div>
            {/* Add a date input for date of birth */}

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>

          <input
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md text-gray-700 mb-1${errors.dob ? 'border-red-500' : 'border-gray-300'}`}
            max={new Date().toISOString().split('T')[0]}
          />

          {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade
          </label>

          {/* Add a select dropdown for grade */}

          <select
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md text-gray-700 mb-1 ${errors.grade ? 'border-red-500' : 'border-gray-300'}`}
          >

            <option value="">Select Grade</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          {errors.grade && <p className="text-red-500 text-sm mt-1">{errors.grade}</p>}

        </div>
      </div>

      <button
        type="submit"
        className="block m-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Add Student
      </button>
    </form>
  );
}