import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/TodoContext";

const NewTodoForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     text: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log("values",values);
  //   },
  // });

  const { addTodos } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);
        addTodos(values.text);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          palceholder="What needs to be done?"
          autoFocus
          name="text"
          id="text"
        ></Field>
      </Form>
    </Formik>

    //   <form>
    //   <input
    //     className="new-todo"
    //     placeholder="What needs to be done?"
    //     autoFocus
    //   />
    // </form>
  );
};

export default NewTodoForm;
