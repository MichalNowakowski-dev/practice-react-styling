import styled from "styled-components";

const DefaultStyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const VariantStyledButton = styled(DefaultStyledButton)(
  ({ theme, variant }) => theme.button.variant[variant]
);
const SizeStyledButton = styled(VariantStyledButton)(
  ({ theme, size }) => theme.button.size[size]
);
const StyledButton = SizeStyledButton;
export { StyledButton };
