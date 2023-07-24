// ResetPassword.js
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const { resetPassword } = useAuth();
    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                alert(`Password reset link has been sent to ${email}.`);
            })
            .catch(err => {
                console.log(err);
            })

        // alert(`Password reset link has been sent to ${email}.`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    onClick={handleResetPassword}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600"
                >
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
