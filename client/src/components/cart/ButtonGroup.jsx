import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const GroupedButton = ({quantity, setIncrease, setDecrease}) => {
  return (
    <Component>
      <Button style={{ borderRadiusLeft: "50%" }} onClick={()=> {setDecrease()}}>-</Button>
      <Button>{quantity}</Button>
      <Button style={{ borderRadiusRight: "50%" }} onClick={()=> {setIncrease()}}>+</Button>
    </Component>
  );
};
export default GroupedButton;