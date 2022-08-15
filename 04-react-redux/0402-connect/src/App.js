import { connect } from "react-redux";

const Incrementar = () => ({ type: "INCREMENTAR" });

function App({ contador, Incrementar }) {
    return (
        <div>
            <h1>Total: {contador}</h1>
            <button onClick={() => Incrementar()}>Incrementar</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contador: state,
    };
};

const mapDispatchToProps = {
    Incrementar,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
