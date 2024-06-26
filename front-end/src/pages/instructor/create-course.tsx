import { useContext, useState } from 'react';
import { AuthContext } from '../../components/AuthContext';
import axios from 'axios';

const CreateCoursePage = () => {
  const { token } = useContext(AuthContext);
  const [course, setCourse] = useState({ title: '', description: '' });

  const handleChange = (e: any) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('/api/instructor/courses', course, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Redirect or update UI
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create a New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={course.title}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={course.description}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded hover:bg-indigo-700">Create Course</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
