import { connect } from "react-redux";
import * as actions from '../actions';
import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button> 
            <button onClick={inc} className="btn btn-primary">INC</button> 
            <button onClick={rnd} className="btn btn-primary">RND</button> 
        </div>
    )
} 

// функция которая будет вытаскивать свойства из state и передавать их в качестве пропсов
const mapStateToProps = (state) => {
    // возвращаем объект с свойствами из state, которые хотим передать в качестве пропсов
    return {
        counter: state.value
    }
}

// // функция которая преобразовывает actions в пропсы
// const mapDispatchToProps = (dispatch) => {
//     // возвращаем объект с action-creator-ами которые хотим передать
//     // bindActionCreators возвращает нам объект с объектом из acion-creator-ов
//     return  bindActionCreators(actions, dispatch);
// }

// функция connect автоматически обернёт action-creator-ы из объекта в dispatch
export default connect(mapStateToProps, actions)(Counter); // функция которая преобразовывает компонент