import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
import { MdLogin } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const navigate = useNavigate()

    const onFormSubmit = (userObj) => {
        axios.post('http://localhost:4000/user-api/create-user', userObj)
            .then(response => {
                alert(response.data.message);
                if (response.data.message === 'user created successfully') {
                    navigate('/login')
                }
            })
            .catch(error => {
                console.log(error)
                alert("something went wrong in creating user")
            })
    }
    return (
        <Container>
            <div className='fw-bold text-center mb-4 headers'>Signup</div>
            <div className='w-50 mx-auto mt-5 p-3 bd forms'>
                <div className='row '>
                    <div className='col-12 w-75 col-sm-8 col-md-6 mx-auto'>
                        <Form onSubmit={handleSubmit(onFormSubmit)}>
                            {/*username*/}
                            <Form.Group className='mb-3'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    {...register("username", { required: true })}
                                />
                                {/*validation error message*/}
                                {errors.username && (
                                    <p className='text-danger' >*Username is required</p>
                                )}
                            </Form.Group>

                            {/*password*/}
                            <Form.Group className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    {...register("password", { required: true })}
                                />
                                {/*validation error message*/}
                                {errors.password && (
                                    <p className='text-danger'>*Password is required</p>
                                )}
                            </Form.Group>

                            {/*email*/}
                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    {...register("email", { required: true })}
                                />
                                {/*validation error message*/}
                                {errors.email && (
                                    <p className='text-danger'>*email is required</p>
                                )}
                            </Form.Group>

                            {/*city*/}
                            <Form.Group className='mb-3'>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter city"
                                    {...register("city", { required: true })}
                                />
                                {/*validation error message*/}
                                {errors.city && (
                                    <p className='text-danger'>*city is required</p>
                                )}
                            </Form.Group>


                            <Button variant='secondary' className='buton' id='a' type='submit'>
                                Signup <MdLogin />
                            </Button>
                        </Form>
                    </div>
                </div>
            </ div>
        </Container>
    );
}

export default Signup;