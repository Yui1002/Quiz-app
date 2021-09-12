import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #eee;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

// This takes props
// to use props in the style component, need to specify the props
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(#348F50, #56B4D3)"
        : !correct && userClicked
        ? "linear-gradient(#FF416C, #FF4B2B)"
        : "#eee"};
    border: 1px 2px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
  }
`;
