import { createContext, useContext, useState, ReactNode } from 'react';
{/** Original chat: https://claude.ai/share/ed43fcb2-08fd-4b27-9930-56b5e7bfa85a */}
// Context
const FormContext = createContext({
  values: {},
  setValue: () => {},
  handleSubmit: () => {},
});

function useForm() {
  const context = useContext(FormContext);
  if (!context) throw new Error('Must be used within Form');
  return context;
}

// Provider
function FormProvider({
  children,
  onSubmit // What happens when the form is submitted (with the values)
}) {
  const [values, setValues] = useState({});

  const setValue = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <FormContext.Provider value={{ values, setValue, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
}

// Input
function FormInput({
  name,
  type = 'text'
}) {
  const { name, type } = props;
  const { values, setValue } = useForm();

  return (
    <input
      type={type}
      value={values[name] || ''}
      onChange={(e) => setValue(name, e.target.value)}
      placeholder={name}
    />
  );
}

// Submit
function FormSubmit({ children }) {
  const { handleSubmit } = useForm();

  return (
    <button onClick={handleSubmit}>
      {children}
    </button>
  );
}

// Bundle
export const Form = Object.assign(FormProvider, {
  Input: FormInput,
  Submit: FormSubmit,
});
