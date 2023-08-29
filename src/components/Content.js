 import React, { useState } from 'react'
 import "./../App.css"

 function Content(props) {
    console.log(props)
    let [good, setGood] = useState(0);



    let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"]);
    let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"])

    function goodFun(){
        setGood(good+1)
        //state 값은 직접적으로 변경 안됨 중요!!
    }
    function Change(){
        let copy = [...title];
        let copy2 = [...desc];
        copy[0] = "쌍둥이 아기판다77"
        copy2[2] = "판다는 곰이 맞음"
        setTitle(copy);
        setDesc(copy2);
    }
    let [modalChk, setModalChk] = useState(false)
    function Modal(){
    //  alert(modalChk)
    //  setModalChk(true);
    // (modalChk == false ? setModalChk(true) : setModalChk(false)); 1번
        // if(modalChk === false){
        //     setModalChk(true)
        // }else{
        //     setModalChk(false)
        // } 2번
        setModalChk(!modalChk)
        //3번 
        //1번/2번/3번 다 똑같음 방법
    }
   return (
    <>
        <div className='content-item' onClick={Modal}>
            <img src='https://via.placeholder.com/320' alt='테스트' />
            <h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
            <p>{desc[props.arrayNum]}</p>
            <p onClick={goodFun}>🤞 {good}</p>
            <button onClick={Change}>수정</button>
        </div>
        {
        //    (modalChk == true ? <div className='window'></div> : null)
           (modalChk == true && <div className='window' onClick={Modal}></div>)
        }
    </>
   )
 }
 export default Content