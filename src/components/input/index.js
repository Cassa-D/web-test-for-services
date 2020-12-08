import styled from "styled-components"

const Input = ({
    type,
    children,
    name,
    placeholder,
    handleOnChange,
    refRegister
}) => {
    const onChange = ({ target: { value, name } }) => {
        handleOnChange(value, name)
    }

    return (
        <InputContainer>
            <div>
                {!(type === "textarea") ?
                    <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        ref={refRegister}
                    />
                    : (type === "textarea") &&
                    <textarea
                        rows={5}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        ref={refRegister}
                    />}
            </div>
            {children}
        </InputContainer>
    )
}

export default Input

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