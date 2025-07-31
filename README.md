# Surendra UI Components

Reusable and customizable React UI components built with [Ant Design](https://ant.design) and designed to work seamlessly with form validation and context handling.

## Features

*  Built using React and Ant Design
*  Reusable Form components with context support
*  Integrated form validation using custom hooks
*  Input, DatePicker, Textarea, Select, and more
*  Useful validation utility functions
*  TypeScript support and tree-shakable

---

## Installation

```bash
npm install @surendra9712/ui-components
# or
npm install @surendra9712/ui-components
```

---

## Usage

> Ensure you are using React 18+ and Ant Design 5+.

Import the components you need:

```tsx
import {
  Button,
  Input,
  Textarea,
  Card,
  Form,
  FormItem,
  Select,
  DatePicker,
  useFormHandler,
  validators
} from '@surendra9712/ui-components';
```
Import the style file where you need

```
import "@surendra9712/ui-components/dist/style.css";
```

## Components

### `Button`

A styled Ant Design button.

```tsx
<Button type="primary" onClick={() => console.log('Clicked')}>
    Submit
</Button>
```

---

## `Form`

Context-aware form wrapper.

```tsx
<Form formErrors={errors}>
    {/* Form Items go here */}
</Form>
```

---

## `FormItem`

Custom wrapper around Ant Design `FormItem` with validation message support.

```tsx
<FormItem name="email" label="Email">
    <Input value={formData.email} onChange={e => handleChange('email', e.target.value)} />
</FormItem>
```

---

## `Input`

Standard Ant Design Input.

```tsx
<Input value={formData.name} onChange={e => handleChange('name', e.target.value)} />
```

---

## `Textarea`

Multiline text input using `Input.TextArea`.

```tsx
<Textarea rows={4} value={formData.description} onChange={e => handleChange('description', e.target.value)} />
```

---

## `Card`

Ant Design card wrapper.

```tsx
<Card title="User Info">
    <p>Details here...</p>
</Card>
```

---

## `DatePicker`

Date picker component with `YYYY-MM-DD` format.

```tsx
<DatePicker value={formData.birthdate} onChange={(_, dateString) => handleChange('birthdate', dateString)} />
```

---

## `Select`

Ant Design select dropdown.

```tsx
<Select
    value={formData.country}
    onChange={(value) => handleChange('country', value)}
    options={[{ label: 'Nepal', value: 'NP' }, { label: 'India', value: 'IN' }]}
/>
```

---

## Hooks

### `useFormHandler<T>()`

A custom React hook for managing form state and validation.

```tsx
const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm
} = useFormHandler(initialFormValues, validationSchema);
```

**Validation Schema Example:**

```ts
const validationSchema = {
    email: [[validators.required, 'Email is required'], [validators.email, 'Invalid email']],
    password: [[validators.required, 'Password is required'], [validators.password, 'Weak password']]
};
```

---

## 🧪 Validators

Built-in utility validators to use with your schema:

* `required(value)`
* `email(value)`
* `minLength(min)`
* `maxLength(max)`
* `password(value)`
* `match(field, getFormData)`
* `dateInPast(value)`
* `dateInFuture(value)`
* `pattern(regex)`
* `number(value)`
* `min(min)`
* `max(max)`
* `phone(value)`

Example:

```ts
validators.minLength(8)('short'); // false
validators.required('hello'); // true
```

---

## Context

Use `useFormContext()` inside any nested component to access validation context:

```tsx
const { formErrors, touchedFields, handleBlur } = useFormContext();
```

---

## Type Safety

This library is written in TypeScript and exposes type definitions for all exported components and utilities. Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true
  }
}
```

---

## Warning

If using this package in TypeScript and you see:

```
TS7016: Could not find a declaration file for module 'surendra-ui-components'.
```

Ensure that your `dist` includes `index.d.ts`. You can fix this by adding the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "./dist"
  }
}
```

Then run:

```bash
tsc
```

---

## Example

```tsx
import {
  Form,
  FormItem,
  Input,
  Button,
  useFormHandler,
  validators
} from '@surendra9712/ui-components';

const initialState = { email: '', password: '' };

const validationSchema = {
  email: [[validators.required, 'Email required'], [validators.email, 'Invalid email']],
  password: [[validators.required, 'Password required'], [validators.password, 'Weak password']]
};

const LoginForm = () => {
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm
  } = useFormHandler(initialState, validationSchema);

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <Form formErrors={errors}>
      <FormItem name="email" label="Email">
        <Input
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)}
        />
      </FormItem>

      <FormItem name="password" label="Password">
        <Input.Password
          value={formData.password}
          onChange={e => handleChange('password', e.target.value)}
        />
      </FormItem>

      <Button type="primary" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
  );
};
```