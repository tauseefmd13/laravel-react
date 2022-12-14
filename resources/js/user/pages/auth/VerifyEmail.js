import React, { useState } from 'react';
import Button from './../../components/Button';
import { Link } from 'react-router-dom';

export default function VerifyEmail({ status }) {

    const initialValues = {
        processing: false,
        errors: {},
    }
    const [data, setData] = useState(initialValues);

    const submit = (e) => {
        e.preventDefault();

        // setData({...data, processing: true});
        
        // verification.send

        // setTimeout(() => {
        //     setData({...data, processing: false});
        // }, 2000);

    };

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                link we just emailed to you? If you didn't receive the email, we will gladly send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button processing={data.processing}>Resend Verification Email</Button>

                    <Link
                        to="/logout"
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </>
    );
}
