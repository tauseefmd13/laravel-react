import React, { useState } from 'react';
import Label from './../../components/Label';
import Input from './../../components/Input';
import Button from './../../components/Button';
import ValidationErrors from './../../components/ValidationErrors';

export default function ForgotPassword({ status }) {

    const initialValues = {
        email: '',
        processing: false,
        errors: {},
    }
    const [data, setData] = useState(initialValues);

    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({...data, [name]: value});
    };

    const submit = (e) => {
        e.preventDefault();

        // password.email
    };

    return (
        <>
            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={data.errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />
                    
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={data.processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </>
    );
}
