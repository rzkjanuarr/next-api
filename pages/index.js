import React from 'react';

export default function Home({ users }) {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Data Users dari Local</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center'>
        {users.map((user) => (
          <div
            key={user.id}
            className='bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg'
          >
            <h2 className='text-xl font-bold mb-2'>{user.name}</h2>
            <p className='text-gray-600'>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();

  return { users: data };
};
