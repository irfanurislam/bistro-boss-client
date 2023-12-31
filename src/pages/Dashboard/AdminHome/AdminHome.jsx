import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div className='w-full m-4'>
            <h2 className='text-3xl'>welcome Back : {user.displayName || 'anonymus'}</h2>
        </div>
    );
};

export default AdminHome;