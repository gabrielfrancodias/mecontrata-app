import styled from 'styled-components/native';
import { css } from 'styled-components';

const textStyles = {
  title: css`
    font-size: 30px;
    font-family: InterLight;
    color: ${({ color }) => (color || '#333951')} ;
  `,
  subtitle: css`
    font-size: 18px;
    font-family: InterExtraLight;
    color: ${({ color }) => (color || '#333951')} ;
  `,
  text: css`
    font-size: 14px;
    font-family: InterRegular;
    color: ${({ color }) => (color || '#333951')} ;
  `,
};

const Text = styled.Text`
  ${({ variant }) => textStyles[variant]}
`;

export { Text };
