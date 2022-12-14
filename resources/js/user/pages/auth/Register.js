import React, { useEffect, useState } from 'react';
import Label from './../../components/Label';
import Input from './../../components/Input';
import Button from './../../components/Button';
import ValidationErrors from './../../components/ValidationErrors';
import { Link } from 'react-router-dom';

export default function Register() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        processing: false,
        errors: {},
    }
    const [data, setData] = useState(initialValues);

    useEffect(() => {
        return () => {
            setData({ password: '', password_confirmation: ''});
        };
    }, []);

    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setData({...data, [name]: value});
    };

    const submit = (e) => {
        e.preventDefault();

        // register
    };

    return (
        <>
            <ValidationErrors errors={data.errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link to="/login" className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={data.processing}>
                        Register
                    </Button>
                </div>
            </form>
        </>
    );
}
