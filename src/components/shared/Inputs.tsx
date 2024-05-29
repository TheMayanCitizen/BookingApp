import { Fragment } from "react"
import {UseFormRegisterReturn} from "react-hook-form"

interface Props {
  label : string;
  name: string;
  type:string;
  register :  UseFormRegisterReturn;
}

function Inputs({label, name, type, register}:Props) {
  return (
    <Fragment>
      <label htmlFor={name}>
          {label}
      </label>
      <input {...register} type={type} id={name} />
    </Fragment>
  )
}
export default Inputs