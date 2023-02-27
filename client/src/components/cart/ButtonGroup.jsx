import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const styledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupedButton = () => {
  return (
    <Component>
      <Button style={{ borderRadiusLeft: "50%" }}>-</Button>
      <Button>1</Button>
      <Button style={{ borderRadiusRight: "50%" }}>+</Button>
    </Component>
  );
};
export default GroupedButton;