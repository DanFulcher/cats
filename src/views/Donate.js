/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const Donate = () => {
  const history = useHistory();
  return (
    <>
      <h1>Donate</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt pellentesque dictum. In vel vestibulum dui. Suspendisse pellentesque iaculis mi aliquam scelerisque. Integer imperdiet magna magna, et varius lorem finibus vitae. Fusce eu nulla in diam dictum malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vehicula dolor sed massa aliquam suscipit. Phasellus venenatis metus augue, non gravida nibh vehicula id. Duis ultrices turpis sit amet dictum mollis. Suspendisse lacinia turpis ante, dapibus auctor justo tristique sed. Aenean fermentum lorem nec ipsum malesuada tempor. Vivamus rutrum nunc a mi imperdiet, a dignissim turpis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque cursus pulvinar eros, sed efficitur massa lacinia ac. Phasellus at faucibus purus, et facilisis nisi. Cras vitae augue nec ipsum convallis ullamcorper.
      </p>

      <p>
        Pellentesque libero nisi, vehicula vitae blandit in, venenatis fringilla velit. Maecenas congue at velit at luctus. Nunc imperdiet elit at leo gravida feugiat. Vestibulum cursus mi justo, sed pharetra sem auctor vitae. Fusce nec erat quis urna dapibus dapibus eu at justo. Pellentesque ornare, risus nec bibendum sollicitudin, metus tellus rutrum ipsum, condimentum commodo purus turpis eu ante. Morbi fermentum tellus faucibus nunc laoreet gravida. Ut aliquam mattis tellus eget accumsan. Vestibulum eget turpis at nibh dictum rhoncus ac eu metus. In dictum mauris felis.
      </p>
      <ButtonCont>
        <Button text="Look at Cats" onClick={() => history.push('/')} />
      </ButtonCont>
    </>
  );
};
const ButtonCont = styled.div`
  width: 400px;
`;
export default Donate;
