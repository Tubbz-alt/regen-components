import React, { useState } from 'react';
import Modal from './';
import Button from '@material-ui/core/Button';

export default {
  title: 'Modal',
  component: Modal,
  // decorators: [withKnobs],
};

function OpenModal(): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>I'm a Modal</p>
      </Modal>
    </div>
  );
}

export const modal = (): JSX.Element => <OpenModal />;
