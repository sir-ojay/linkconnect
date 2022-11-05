import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const Form = () => {
  const name = "Ibrahim Sannu";

  const [formValid, setFormValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    messageinfo: "",
  });

  useEffect(() => {
    if (
      form.firstname !== "" &&
      form.lastname !== "" &&
      form.email !== "" &&
      form.messageinfo !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form.firstname, form.lastname, form.email, form.messageinfo]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.username]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    sessionStorage.setItem("contactMe", JSON.stringify({ ...form }));

    window.location = "/";
    reset();
  };
  return (
    <>
      {" "}
      <form id="form__wrapper" onSubmit={handleSubmit(submitHandler)}>
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div id="form__flex">
          <div id="first__name__container">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="first_name"
              className={` ${errors.firstname && "invalid"}`}
              {...register("firstname", {
                required: "Please enter your first name",
              })}
              onKeyUp={() => {
                trigger("firstname");
              }}
              onChange={handleChange}
            />
            {errors.firstname && <small>{errors.firstname.message}</small>}
          </div>
          <div id="last__name__container">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="last_name"
              className={` ${errors.lastname && "invalid"}`}
              {...register("lastname", {
                required: "Please enter your last name ",
              })}
              onKeyUp={() => {
                trigger("lastname");
              }}
              onChange={handleChange}
            />
            {errors.lastname && <small>{errors.lastname.message}</small>}
          </div>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="yourname@email.com"
            id="email"
            className={` ${errors.email && "invalid"}`}
            maxlength="35"
            minlength="7"
            errormessage="It should be a valid email address!"
            {...register("email", {
              required: "Please enter your email address ",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <textarea
            maxlength="1005"
            minlength="3"
            placeholder=" Send me a message and i ll reply you as soon as possible...."
            id="message"
            className={`${errors.messageinfo && "invalid"}`}
            {...register("messageinfo", { required: "Please enter a message" })}
            onKeyUp={() => {
              trigger("messageinfo");
            }}
          ></textarea>

          {errors.messageinfo && <small>{errors.messageinfo.message}</small>}
        </div>
        <span>
          <input
            type="checkbox"
            name=""
            id="checkbox"
            className={` ${errors.checkbox && "invalid"}`}
            {...register("checkbox", {
              required: "checkbox is required",
            })}
            onKeyUp={() => {
              trigger("checkbox");
            }}
          />{" "}
          <label htmlFor="agreement">
            You agree to providing your data to {name} who may contact you.
          </label>
        </span>

        <div>
          <button id="btn__submit">Send message</button>
        </div>
      </form>
    </>
  );
};

export default Form;
