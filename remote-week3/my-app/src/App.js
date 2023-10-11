import "./App.css";
import styled from "styled-components";
import React, { useState } from "react";
import { Q1, A1, Q2, A2, Q3, A3, Q4, A4, Q5, A5 } from "./getPostData.js";

const Question = styled.div`
  font-size: 20px;
`;
const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
const Border = styled.div`
  border: solid 1px rgb(96, 96, 96);
  background-color: rgb(241, 241, 241);
  border-radius: 3rem;
  height: 80vh;
  width: 70vw;
  padding: 2rem 1rem 2rem 1rem;
`;
const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: aqua;
  width: 5rem;
  height: 2rem;
  border: solid 1px rgb(141, 30, 30);
`;
const Likepic = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

function App() {
  const [count, setCount] = useState(5);
  const [isIncrementing, setIsIncrementing] = useState(true);
  const handleClick = () => {
    if (isIncrementing) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setIsIncrementing(!isIncrementing);
  };

  return (
    <Layout>
      <Border>
        <div>
          <Question>
            <b>{Q1}</b>
          </Question>
          <div>{A1}</div>
          <Question>
            <b>{Q2}</b>
          </Question>
          <div>{A2}</div>
          <Question>
            <b>{Q3}</b>
          </Question>
          <div>{A3}</div>
          <Question>
            <b>{Q4}</b>
          </Question>
          <div>{A4}</div>
          <Question>
            <b>{Q5}</b>
          </Question>
          <div>{A5}</div>
        </div>
        <button onClick={handleClick} style={{ border: "none" }}>
          <Like>
            <Likepic src={process.env.PUBLIC_URL + "/like.png"}></Likepic>
            <div>
              <b>{count}</b> like
            </div>
          </Like>
        </button>
      </Border>
    </Layout>
  );
}

export default App;
