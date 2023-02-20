import axios from "axios";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormContainer,
  ValidationError,
  Rules,
  SignUpButton,
} from "./SignUp.styled";

interface IStatus {
  code: number;
  message: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues, any>();

  const [status, setStatus] = useState<IStatus>({ code: 0, message: "" });

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3001/users",
        formData
      );
      //navigate(`/login`);
      reset();
      setStatus({ code: 201, message: "Successful sign up" });
    } catch (error: any) {
      setStatus({ code: 400, message: `${error.response.data}` });
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
        <label htmlFor="username">
          <b>Username:</b>
        </label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
          style={{
            borderBottom: errors.username
              ? "1.5px solid #FF0000"
              : "1.5px solid #000000",
          }}
        />
        {errors.username?.type === "required" && (
          <ValidationError>Username is required</ValidationError>
        )}

        <label htmlFor="email">
          <b>E-mail:</b>
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          style={{
            borderBottom: errors.email
              ? "1.5px solid #FF0000"
              : "1.5px solid #000000",
          }}
        />
        {errors.email?.type === "pattern" && (
          <ValidationError>Incorrect email address</ValidationError>
        )}
        {errors.email?.type === "required" && (
          <ValidationError>Email address is required</ValidationError>
        )}

        <label htmlFor="password">
          <b>Password:</b>
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true, minLength: 4 })}
          style={{
            borderBottom: errors.password
              ? "1.5px solid #FF0000"
              : "1.5px solid #000000",
          }}
        />
        {errors.password?.type === "required" && (
          <ValidationError>Password is required</ValidationError>
        )}
        {errors.password?.type === "minLength" && (
          <ValidationError>Password is too short</ValidationError>
        )}

        <label htmlFor="phone">
          <b>Phone number:</b>
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: true,
            pattern: /^[0-9]+$/,
            maxLength: 9,
            minLength: 9,
          })}
          style={{
            borderBottom: errors.phone
              ? "1.5px solid #FF0000"
              : "1.5px solid #000000",
          }}
        />
        {errors.phone?.type === "pattern" && (
          <ValidationError>Incorrect phone number</ValidationError>
        )}
        {errors.phone?.type === "minLength" && (
          <ValidationError>Phone number requires 9 numbers</ValidationError>
        )}
        {errors.phone?.type === "maxLength" && (
          <ValidationError>Phone number requires 9 numbers</ValidationError>
        )}
        {errors.phone?.type === "required" && (
          <ValidationError>Phone number is required</ValidationError>
        )}

        <Rules>
          <div>
            <input
              type="checkbox"
              id="rules"
              {...register("rules", { required: true })}
              style={{
                outline: errors.rules ? "1.5px solid #FF0000" : "",
              }}
            />
            <label htmlFor="rules">I accept the Terms and Conditions</label>
          </div>
          {errors.rules && (
            <ValidationError>
              Acceptance of regulations is required
            </ValidationError>
          )}
        </Rules>

        <SignUpButton type="submit">Sign Up</SignUpButton>
      </Form>
      {status.code === 201 && <p>{status.message}</p>}
      {status.code === 400 && (
        <ValidationError>{status.message}</ValidationError>
      )}
    </FormContainer>
  );
};

export default SignUp;
