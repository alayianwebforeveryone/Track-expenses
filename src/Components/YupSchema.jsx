import * as Yup from 'yup';

export const FormSchema = Yup.object({
     title:Yup.string(). matches(/^[A-Za-z\s]+$/, 'Title can only contain alphabetic characters').min(3).max(20).required('Title is required'),
     cetagory: Yup.string().required('Please chose a cetagory'),
     amount: Yup.number(). typeError('Amount must be a number').required('Amount is required'),
})