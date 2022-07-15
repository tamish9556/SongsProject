import * as Yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export default function ValidateContainer(){
  const schema = Yup.object().shape({
    title: Yup.string().required("Enter the title of song "),
    artist: Yup.string().required("Enter artist song name"),
    gener: Yup.string().required("Select gener from the options below"),
    length: Yup.number().positive().required("Enter length of the song"),
    price: Yup.number().positive().required("Enter price for the song"),
  });
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema)
    });
  const onSubmitHandler = (data:any) => {
    console.log({ data });
    reset();
  };
}

//   return (
    // <form onSubmit={handleSubmit(onSubmitHandler)}>
    //   <br />
    //   <input {...register("title")} placeholder="Title" type="text" required />
    //   <br />
    //   <input {...register("artist")} placeholder="Artist" type="text" required />
    //   <br />
    //   <input {...register("gener")} placeholder="Gener" type="Gener" required />
    //   <br />
    //   <input {...register("length")} placeholder="Length" type="number" required/>
    //   <br />
    //   <input {...register("price")} placeholder="Price" type="number" required/>
    //   <br />
    //   <button type="submit">Sign in</button>
//     </form>
//   );

//https://codesandbox.io/s/formik-material-ui-and-yup-hy0ju?file=/src/form/Form.js:0-5373