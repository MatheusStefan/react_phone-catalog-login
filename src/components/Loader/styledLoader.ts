import styled from "styled-components";

export const StyledLoader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .Loader {
    &__content {
      border-radius: 50%;
    width: 2em;
    height: 2em;
    margin: 1em auto;
    border: 0.3em solid #ddd;
    border-left-color: #000;
    animation: load8 1.2s infinite linear;
  }
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`