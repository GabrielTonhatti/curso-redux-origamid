const INCREMENTAR_TEMPO = "aula/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aula/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aula/MODIFICAR_EMAIL";
const COMPLETAR_AULA = "aula/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aula/COMPLETAR_CURSO";
const RESETAR_CURSO = "aula/RESETAR_CURSO";

const aluno = {
    nome: "André Rafael",
    email: "andre@origamid.com",
    diasRestantes: 120,
};

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

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });
export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const initialState = { aluno, aulas };

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case INCREMENTAR_TEMPO:
            state.aluno.diasRestantes += 1;
            break;
        case REDUZIR_TEMPO:
            state.aluno.diasRestantes -= 1;
            break;
        case MODIFICAR_EMAIL:
            state.aluno.email = action.payload;
            break;
        case COMPLETAR_AULA:
            state.aulas.find(
                (aula) => aula.id === action.payload
            ).completa = true;
            break;
        case COMPLETAR_CURSO:
            state.aulas.forEach((aula) => (aula.completa = true));
            break;
        case RESETAR_CURSO:
            state.aulas.forEach((aula) => (aula.completa = false));
            break;
    }
}, initialState);

export default reducer;
