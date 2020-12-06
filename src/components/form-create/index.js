import { useForm } from "react-hook-form"

import styled from "styled-components"

import Modal from "../modal"

const FormCreate = ({ inputs, data: { data, setData }, onSubmit, show: { showModal, setShowModal }, title }) => {
    const { register, handleSubmit, errors } = useForm()

    const handleInputChange = ({ target: { value, name } }) => 
        setData({ ...data, [name]: value })

    return (
        <>
            <Modal show={showModal}>
                <div>
                    <button onClick={() => setShowModal(false)}>Fechar</button>
                </div>
                
                <div>
                    <h2>{title}</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {inputs.map(({ type, name, placeholder, validate }, index) => (
                            <InputContainer key={index}>
                                <div>
                                    {type === "text" || type === "number" ?
                                        <input
                                            type={type}
                                            name={name}
                                            id={name}
                                            placeholder={placeholder}
                                            value={data[name]}
                                            defaultValue={data[name]}
                                            onChange={handleInputChange}
                                            ref={register({ validate })}
                                        />
                                        : type === "textarea" &&
                                            <textarea
                                                name={name}
                                                rows={5}
                                                id={name}
                                                placeholder={placeholder}
                                                value={data[name]}
                                                onChange={handleInputChange}
                                                ref={register({ validate })}
                                            />}
                                </div>
                                <span className="error">
                                    {errors[name] && errors[name].message}
                                </span>
                            </InputContainer>
                        ))}

                        <input type="Submit" value="Enviar" />
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default FormCreate

const InputContainer = styled.div`
    margin: 10px;
    align-items: center;

    width: 500px;

    input, textarea {
        width: 100%;

        box-sizing: border-box;

        padding: 10px;
        margin: 0;

        outline: none;
    }

    textarea {
        resize: vertical;
    }

    .error {
        color: red;
        font-size: 0.8rem;
    }
`