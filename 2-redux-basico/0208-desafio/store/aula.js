const COMPLETAR_AULA = "aula/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aula/COMPLETAR_CURSO";
const RESETAR_CURSO = "aula/RESETAR_CURSO";

export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const aulas = [
    {
        id: 1,
        nome: "Design",
        completa: true,
    },
    {
        id: 2,
        nome: "HTML",
        completa: false,
    },
    {
        id: 3,
        nome: "CSS",
        completa: false,
    },
    {
        id: 4,
        nome: "JavaScript",
        completa: false,
    },
];

const initialState = aulas;

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case COMPLETAR_AULA:
            const index = state.findIndex((aula) => aula.id === action.payload);
            if (!isNaN(index) && state[index]) state[index].completa = true;
            break;
        case COMPLETAR_CURSO:
            state.forEach((aula) => (aula.completa = true));
            break;
        case RESETAR_CURSO:
            state.forEach((aula) => (aula.completa = false));
            break;
    }
}, initialState);

export default reducer;
