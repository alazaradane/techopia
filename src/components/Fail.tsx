import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';
import React from 'react';

const Fail = ({text})=> {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        {text}
      </Notification>
      
    </>
  );
}

export default Fail