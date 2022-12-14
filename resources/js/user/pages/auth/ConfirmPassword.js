import React, { useEffect, useState } from 'react';
import Label from './../../components/Label';
import Input from './../../components/Input';
import Button from './../../components/Button';
import ValidationErrors from './../../components/ValidationErrors';

export default function ConfirmPassword() {

    const initialValues = {
        password: '',
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
        const value = event.target.value;
        setData({...data, [name]: value});
    };

    const submit = (e) => {
        e.preventDefault();

        // password.confirm
    };

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <ValidationErrors errors={data.errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={data.processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </>
    );
}
