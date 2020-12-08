import { useState } from "react"
import { useForm } from "react-hook-form"

import Input from "../input"

const Form = ({ inputs, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm()

    const [data, setData] = useState({})

    const handleInputChange = (value, name) => 
        setData({ ...data, [name]: value })

    const handleOnSubmit = () => {
        onSubmit(data)
        setData({})
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            {inputs.map(({ type, name, placeholder, refMessage }, index) => (
                <Input
                    key={index}
                    type={type}
                    name={name}
                    placeholder={placeholder} 
                    handleOnChange={handleInputChange}
                    refRegister={register({
                        validate: (value) => {
                            const { required, min } = refMessage
                            setData({ ...data, [name]: value })

                            if (!value) return required
                            if (value.length < 3 && min)
                                return min
                        }
                    })}
                >
                    <span className="error">
                        {errors[name] && errors[name].message}
                    </span>
                </Input>
            ))}
            <input type="Submit" defaultValue="Enviar" />
        </form>
    )
}

export default Form