/**
 * The strategy design pattern is very used when we have similar tasks and we need to change between tasks in the runtime
 * This pattern help us to eliminate a lot of if-else sentences, to do that simply
 * we have to encapsulate the tasks in small chunks and use an object literal to access our concrete strategy
 * 
 * 
 * 
 * useForm (Strategy A)
 * AdminForm (Strategy B -------> FormManage ----------> FormComponent
 * GuestForm (Strategy C) 
 * 
 * 
 * Use Case: Imagine that we have a dropdown with different user types (normal user, admin, and guest)
 * We will display a form based on the use types
 * Here is the example with React, and you can implement in other JS frameworks
 */

// React Components section
import React from 'react';
import UserForm from './userForm';
import AdminForm from './adminForm';
import GuestForm from './guestForm';

/**
 * This object literal will help to encapsulate all the forms that could we have.
 */

const FormsMange = {
  user: {
    render(props) {
      return <UserForm {...props} />
    }
  },
  admin: {
    render(props) {
      return <Admin {...props} />
    }
  },
  guest: {
    render(props) {
      return <Guest {...props} />
    }
  },
}


/**
 * Main form component
 */
const Form = (props) => {
  // here we are getting the form by type
  const userForm = FormsMange[props.type];
  return userForm.render(props);
}

export default Form;