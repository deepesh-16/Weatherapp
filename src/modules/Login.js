import { useForm } from "react-hook-form";
import { Form , Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import image from "../images/user-3295.svg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';



function Login(){

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

  
    let navigate=useNavigate();
    

    const onFormSubmit=(userCredentialsObject)=>{
        axios.post('http://localhost:4000/user-api/login', userCredentialsObject )
        .then(response=>{
            alert(response.data.message);
            if(response.data.message==='success'){
                navigate('/Homepage')
            }
        })
        .catch(error=>{
            console.log(error)
            alert("invalid username or password")
        })

    };

 

    return(
        <div className='container mb-4'>
            <p className='display-2 text-center header'>Login</p>
            <div className="wraper">
            <img 
                src={image} 
                className='d-sm-block d-none mx-auto img' 
                width="200px" 
                alt="" 
            />
            <div className='row '>
                <div className='col-12 col-sm-8 col-md-6 mx-auto'>
                   <Form onSubmit={handleSubmit(onFormSubmit)}>      
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Username" 
                            {...register("username",{required:true})} 
                        />
                        {errors.username && (
                            <p className='text-danger' >*Username is required</p>
                        )}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Enter Password' 
                            {...register("password",{required:true})} 
                        />
                        {errors.password && (
                            <p className='text-danger'>*Password is required</p>
                        )}
                    </Form.Group>

                    <Button variant='secondary' id="a" type="submit" className="buton2">
                        Login <MdLogin />
                    </Button>
                </Form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;