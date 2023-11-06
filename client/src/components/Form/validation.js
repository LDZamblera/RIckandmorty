export const validation = (inputs) => {
    const errors = {};
    if (!inputs.username) 
        errors.username = 'Email is required';
    else if (inputs.username.length > 35)
        errors.username = 'Email must have less of 35 characters'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.username))
        errors.username = 'Please enter a valid email address';

    if (!/\d/.test(inputs.password))
        errors.password = 'Password must have a number';
    else if (inputs.password.length < 6)
        errors.password = 'Password must be at least 6 characters'
    else if (inputs.password.length > 10)
         errors.password = 'Password must be at most 10 characters'

    return errors;
}