import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {

    const user = {
        name: 'Amrin',
        email: 'amrin@diu.edu.bd',
        adress: 'Mirpur, Dhaka',
        gender: 'female',
        status: 'single',
        proffesion: 'student'
    }
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/clickcounter');
    }



  return (
    <div className="max-w-sm mx-auto bg-red-100 shadow-lg rounded-lg overflow-hidden mt-8 p-6">
      
      <h2 className="text-xl font-semibold text-gr mb-4">User Information</h2>
      <div className="text-gray-700">
        <p className="mb-2">
          <span className="font-medium text-gray-600">Name:</span> {user?.name}
        </p>
        <p className="mb-2">
          <span className="font-medium text-gray-600">Email:</span> {user?.email}
        </p>

        <p className="mb-2">
          <span className="font-medium text-gray-600">Adress:</span> {user?.adress}
        </p>
        <p className="mb-2">
          <span className="font-medium text-gray-600">Gender:</span> {user?.gender}
        </p>
        <p className="mb-2">
          <span className="font-medium text-gray-600">Status:</span> {user?.status}
        </p>
        <p className="mb-2">
          <span className="font-medium text-gray-600">Profession:</span> {user?.proffesion}
        </p>
        


      </div>
      <div className="max-w-sm mx-auto bg-slate-200 shadow-lg rounded-lg overflow-hidden mt-8 p-6">
      <button  onClick={handleButtonClick} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ">
    HOC
</button>
      </div>


      

</div>
      

  )
}

export default User
