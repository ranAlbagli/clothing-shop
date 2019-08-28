import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.style.scss'

class SignIn extends React.Component{

    state={
        email:'',
        password:''
    }

    handleSubmit=event=>{
        event.preventDefault();
       
    }

    handleChange=event=>{
        const {name ,value} = event.target
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <CustomButton type="submit"> SIGN IN</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn 