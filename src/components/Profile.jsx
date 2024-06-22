import React from "react";

const Profile = () => {
  return (
    <div className="bg-blue-950 w-screen h-screen flex justify-center items-center">
      <div className="shadow-lg shadow-white w-max">
        <div className="relative flex flex-col justify-between h-72 w-96">
          <img
            className="absolute inset-0 object-cover m-auto border-4 border-white rounded-full w-36 h-36"
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="Profile"
          />

          <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00ODYtYmctMDI3LXguanBn.jpg"
            alt="bg"
            className="w-42 h-48 object-cover"
          />
           <div className='flex flex-col items-center justify-center h-96 py-4 bg-white'>
            <div>
              <h2 className='font-bold'>
                Ram <span className='font-semibold opacity-50 '>23</span>
              </h2>
              <p className='opacity-50'>Chennai</p>
            </div>
          </div>
        </div>
         
        <div className="flex justify-evenly items-start flex-row bg-white border-t-2">
            <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold">80K</h2>{' '}
                <p className='text-sm opacity-50'>Followers</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold">803K</h2>{' '}
                <p className='text-sm opacity-50'>Likes</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold">1.4K</h2>{' '}
                <p className='text-sm opacity-50'>Photos</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
