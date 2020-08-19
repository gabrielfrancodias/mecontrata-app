import styled from 'styled-components/native';
import { css } from 'styled-components';

const textStyles = {
  title: css`
    font-size: 30px;
    font-family: InterSemiBold;
  `,
  subtitle: css`
    font-size: 18px;
    font-family: InterSemiBold;
  `,
  text: css`
    font-size: 14px;
    font-family: InterRegular;
  `,
};

const Text = styled.Text`
  ${({ variant }) => textStyles[variant]}
`;

export { Text };