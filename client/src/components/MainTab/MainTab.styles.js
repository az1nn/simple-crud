import styled from "styled-components"
import * as Tabs from '@radix-ui/react-tabs';

export const TabsContainer = styled(Tabs.Root)`
  font-family: 'Montserrat';
  width: 30%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
`
export const TabBar = styled(Tabs.List)`
  width: 100%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  background-color: salmon;
  border-radius: 10px 10px 0px 0px;
`
export const Tab = styled(Tabs.Trigger)`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 2px solid #d1d1d1;
  font-size: 18px;
  
  &[data-state = "active"] {
    border: none;
    background-color: white;
    font-weight: 800;
  }

  &[data-state = "inactive"] {
    color: #6C6C6C;
  }

  &:first-of-type {
    border-top-left-radius: 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
  }
`
export const CardContentContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const CardH1 = styled.h1`
  width: 100%;
  font-size: 42px;
  margin-bottom: 20px;
`
export const StyledInput = styled.input`
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #6c6c6c;
  box-sizing: border-box;
  padding-left: 20px;
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 500;
`
export const StyledButton = styled.button`
  width: 60%;
  height: 40px;
  margin: ${props => props.margin};
  background-color: #69B578;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 800;
  transition: 0.25s;
  cursor: pointer;
  
  &:hover {
    color: #69B578;
    border: 2px solid #69B578;
    box-shadow: inset 0 -3.25em 0 0 white;
    transition: 0.25s;
  }
`