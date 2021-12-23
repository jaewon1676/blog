import {useState} from 'react';
import './App.css';

function App() {

    let [글제목, 글제목변경] = useState(['7', '9', '4', '2', '5'])
    let [따봉, 따봉변경] = useState(0)
    let [modal, modal변경] = useState(false)

    function 제목바꾸기() {
        var Array = [...글제목]
        Array.sort(function (a, b) {
            return a - b
        })
        글제목 = Array
        글제목변경(글제목)
    }

    return (
        <div className="App">
            <div className='black-nav'>
                개발 Blog
            </div>
            <button onClick={제목바꾸기}>button</button>
            <h4 className='list'>
                <h3>{글제목[0]}<span onClick={() => {
                따봉변경(따봉 + 1)
            }}>따봉</span>{따봉}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </h4>
            <h4 className='list'>
                <h3>{글제목[1]}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </h4>
            <h4 className='list'>
                <h3>{글제목[2]}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </h4>
            <h4 className='list'>
                <h3>{글제목[3]}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </h4>
            <h4 className='list'>
                <h3>{글제목[4]}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </h4>
            <button onClick = {() => {modal변경(modal===true?false:true)}}>button</button>
            {modal === true ? <Modal/> : null}
        </div>
    );
    function Modal() {
        return (
            <div className='modal'>
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        )
    }
}

export default App;