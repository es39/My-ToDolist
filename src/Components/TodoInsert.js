import React from "react";
import { useState } from "react";
import styled from "styled-components";

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  & focus {
    outline: 2px solid;
  }
  width: 200px;
  height: 20px;
  margin: 5px;
`;

const SubmitBtn = styled.button`
  border: none;
  border-color: transparent;
  cursor: pointer;
  width: 90px;
  height: 30px;
`;

const TodoInsert = ({ addValue }) => {
  const [value, setValue] = useState("");

  // input이 변경될 때마다 실행
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addValue(value);
    setValue("");
  };

  return (
    <div>
      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="todolist add.."
        ></Input>
        <SubmitBtn type="submit">추가해줘 구리!</SubmitBtn>
      </InputForm>
    </div>
  );
};

export default TodoInsert;

/* TODO:
1. form 형태 추가 *
2. input 추가 *
3. 제출 버튼 추가 *
4. 입력 이벤트 함수 추가 *
5. styled-components 적용
*/
