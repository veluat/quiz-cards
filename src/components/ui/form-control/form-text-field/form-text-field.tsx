import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

type FormTextFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<TextFieldProps, 'onChange' | 'value'>

export const FormTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormTextFieldProps<T>) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <TextField
      errorMessage={error?.message}
      onChange={onChange}
      value={value}
      {...field}
      {...rest}
    />
  )
}
