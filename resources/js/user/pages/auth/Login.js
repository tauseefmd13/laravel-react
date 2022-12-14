import React, { useEffect, useState } from 'react';
import Label from './../../components/Label';
import Input from './../../components/Input';
import Checkbox from './../../components/Checkbox';
import Button from './../../components/Button';
import ValidationErrors from './../../components/ValidationErrors';
import { Link } from 'react-router-dom';

export default function Login({ status, canResetPassword }) {

    const initialValues = {
        email: '',
        password: '',
        remember: '',
        processing: false,
        errors: {},
    }
    const [data, setData] = useState(initialValues);

    useEffect(() => {
        return () => {
            setData({ password: ''});
        };
    }, []);

    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setData({...data, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // login
    };

    return (
        <>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={data.errors} />

            <form onSubmit={handleSubmit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            to="/forgot-password"
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button className="ml-4" processing={data.processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </>
    );
}