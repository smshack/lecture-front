import React, { useEffect, useContext, useState, useRef } from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "../../context/AuthContext"
const Member = props => {
    const [inputs, setInputs] = useState({
      name: "",
      nickname: "",
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      console.log(e.target, "e.target");
      console.log(value, "value");
      console.log(name, "name");
      console.log({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value, // name 키를 가진 값을 value 로 설정
      });
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value, // name 키를 가진 값을 value 로 설정
      });
    };

    const onReset = () => {
      setInputs({
        name: "",
        nickname: "",
      });
      nameInput.current.focus();
    };

    return (
      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
          ref={nameInput}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: </b>
          {name} ({nickname})
        </div>
      </div>
    );
}

Member.propTypes = {}

export default Member