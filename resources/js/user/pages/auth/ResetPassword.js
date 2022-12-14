import React, { useEffect, useState } from 'react';
import Label from './../../components/Label';
import Input from './../../components/Input';
import Button from './../../components/Button';
import ValidationErrors from './../../components/ValidationErrors';

export default function ResetPassword({ token, email }) {

    const initialValues = {
        token: token,
        email: email,
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
        const value = event.target.value;
        setData({...data, [name]: value});
    };

    const submit = (e) => {
        e.preventDefault();

        // password.update
    };

    return (
        <>
            <ValidationErrors errors={data.errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
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
                        autoComplete="new-password"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={data.processing}>
                        Reset Password
                    </Button>
                </div>
            </form>
        </>
    );
}
