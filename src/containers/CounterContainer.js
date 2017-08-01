import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

/*
    컨테이너 컴포넌트를 store에 연결시켜주려면 react-redux의 connect함수를 사용해야 한다
    이 함수의 파라미터로 컴포넌트에 연결시킬 상태와 액션함수들을 전달해주면 컴포넌트를 리덕스 스토어에 연결시키는 또다른 함수를 반환
    이 과정에서 리턴된 함수 안에 프리젠테이셔널 컴포넌트를 파라미터로 전달해주면 리덕스 스토어에 연결된 컴포넌트가 새로 만들어집니다.

    컴포넌트에 연결시킬 상태와 액션함수를 정의할땐 각각 함수를 만들어줘야하는데요.
    상태를 연결시킬땐 state, 액션함수를 연결시킬땐 dispatch 를 파라미터로 전달받는 함수를 만들어서
    객체를 반환하면 이를 props 로 사용 할 수 있게 됩니다.
*/

// store 안의 state 값을 컴포넌트의 props 로 연결(맵핑)
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
})

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
    (state 재 구성되면 mapStateToProps를 통해 듣고있던 Container들은 업데이트됨)
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = 'black'; // 임시
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

/*
    상태를 연결시키는 함수는 mapStateToProps 로, 액션함수를 연결시키는 함수는 mapDispatchToProps 로 만들어서,
    이를 connect에 전달해주고, 그렇게 전달받은 함수에 우리가 아까 만든 Counter 컴포넌트를 전달하여 이를 내보냄
 */

export default CounterContainer;