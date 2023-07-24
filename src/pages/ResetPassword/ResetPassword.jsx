// ResetPassword.js
import React, { useState } from 'react';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Here you can implement the logic to send a reset password link to the user's email.
        // You can use a backend API to handle the actual email sending process.
        // For this example, we'll just display a message indicating the password reset link has been sent.
        alert(`Password reset link has been sent to ${email}.`);
    };

    return (
        <div className="container">
            <h2>Reset Password</h2>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                />
            </div>
            <button onClick={handleResetPassword} className="btn btn-primary">
                Reset Password
            </button>
        </div>
    );
};

export default ResetPassword;
