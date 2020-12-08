export const tableInputs = [
    {
        type: "text",
        name: "name",
        placeholder: "Nome da tabela",
        refMessage: {
            required: "Por favor informe um nome para a nova tabela!",
            min: "Favor informar um nome adequado! (quantidade minima de caracteres: 5)"
        }
    },
    {
        type: "textarea",
        name: "award",
        placeholder: "Premiação",
        refMessage: {
            required: "Por favor informe a premiação!",
            min: "Favor informar uma premiação adequada! (quantidade minima de caracteres: 3)"
        }
    },
    {
        type: "number",
        name: "table_score",
        placeholder: "Pontuação para vitória",
        refMessage: {
            required: "Por favor informe a pontuação!"
        }
    },
    {
        type: "textarea",
        name: "description",
        placeholder: "Descreva como é feito a pontuação",
        refMessage: {
            required: "Por favor informe uma descrição!",
            min: "Favor informar uma descrição adequada! (quantidade minima de caracteres: 10)"
        }
    }
]

export const teamInputs = [
    {
        type: "text",
        name: "name",
        placeholder: "Nome do time",
        refMessage: {
            required: "Por favor informe um nome para o novo time!",
            min: "Favor informar um nome adequado! (quantidade minima de caracteres: 5)"
        }
    },
    {
        type: "text",
        name: "player1",
        placeholder: "Nome do jogador 1",
        refMessage: {
            required: "Por favor informe o nome do primeiro jogador!",
            min: "Favor informar um nome adequado! (quantidade minima de caracteres: 3)"
        }
    },
    {
        type: "text",
        name: "player2",
        placeholder: "Nome do jogador 2",
        refMessage: {
            required: "Por favor informe o nome do segundo jogador!",
            min: "Favor informar um nome adequado! (quantidade minima de caracteres: 3)"
        }
    }
]