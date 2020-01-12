import styled from "styled-components";
import "font-awesome/css/font-awesome.css";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
background-color: #d3d3d3;
flex-direction: column;
display: flex;
padding: 30px;
align-items: center;
input {
    align-items: center;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
}
p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
`;