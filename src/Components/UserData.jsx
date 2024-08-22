
import { Form, useFormik } from 'formik';
import React from 'react';
import { FormSchema } from './YupSchema';

function UserData({ setExpensesData, expense, setExpense, isEditing, setIsEditing }) {

  const formInitialValues = {
    title: expense?.title || '',
    cetagory: expense?.cetagory || '',
    amount:expense?.amount || '',
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    enableReinitialize: true,
    validationSchema: FormSchema,

    onSubmit: (values) => {
      if (isEditing) {
        setExpensesData((prev) =>
          prev.map((prevExp) => {
            if (prevExp.id === isEditing) {
              return { ...values, id: isEditing }; // Update with the new values from Formik
            }
            return prevExp; // Return other items unchanged
          })
        );
        setIsEditing('');
        formik.resetForm();
        setExpense({}); // Resets the form using Formik's reset function
        return;
      }

      setExpensesData((prev) => [
        ...prev,
        { ...values, id: crypto.randomUUID() },
      ]);
      
      formik.resetForm();
      setExpense({}); // Resets the form after adding a new expense

    },
  });

  const { values, handleSubmit,  handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full md:w-[70%]">
        <form noValidate className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-white text-left text-sm font-medium leading-6">
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                value={values.title}
                onChange={handleChange}
                name="title"
                type="text"
                onBlur={handleBlur}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white   shadow-sm ring-1 ring-inset ring-[#AAABB8]  sm:text-sm sm:leading-6"
              />
            </div>
            {touched.title && errors.title ? (
              <span className='text-[#ee4848] '>{errors.title}</span>
            ) : null}
          </div>

          <div>
            <label htmlFor="cetagory" className="block text-white text-left text-sm font-medium leading-6">
              Category
            </label>
            <div className="mt-2">
              <select
                name="cetagory"
                value={values.cetagory}
                onBlur={handleBlur}
                onChange={handleChange}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#AAABB8]  sm:leading-6"
              >
                <option  style= {{backgroundColor : "#AAABB8  "}} className='font-bold text-[#25274D]' value="">Please choose an option</option>
                <option style= {{backgroundColor : "#AAABB8  "}} className='text-[#25274D]' value="Food">Food</option>
                <option  style= {{backgroundColor : "#AAABB8  "}} className='text-[#25274D]' value="Internet and Mobile" >Internet and Mobile</option>
                <option style= {{backgroundColor : "#AAABB8  "}} className='text-[#25274D]' value="Education">Education</option>
                <option style= {{backgroundColor : "#AAABB8  "}} className='text-[#25274D]' value="Health">Health</option>
                <option style= {{backgroundColor : "#AAABB8  "}} className='text-[#25274D]' value="Other">Other</option>
              </select>
            </div>
            {touched.cetagory && errors.cetagory ? (
              <span className='text-red-500 '>{errors.cetagory}</span>
            ) : null}
          </div>

          <div>
            <label htmlFor="amount" className="block text-white text-left text-sm font-medium leading-6">
              Amount
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={values.amount}
                id="amount"
                name="amount"
                type="text"
                onBlur={handleBlur}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#AAABB8]   sm:leading-6"
              />
            </div>
            {touched.amount && errors.amount ? (
              <span className='text-red-500'>{errors.amount}</span>
            ) : null}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#419fdd] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#AAABB8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {isEditing ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserData;
