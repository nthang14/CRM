import TextField from '@mui/material/TextField';

const InputCommon = ({...props}) => {
  return (
    <>
      <TextField
        className={(props.className ?? '') + ' w-full'}
        label={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled ?? false}
        name={props.name}
        defaultValue={props.defaultValue}
      />
    </>
  )
}

export default InputCommon;