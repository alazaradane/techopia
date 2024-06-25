import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';
import React from 'react';

const success = ({text})=> {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        {text}
      </Notification>
    </>
  );
}

export default success