import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

interface Props {
  children: string;
}

function TodoItem({ children }: Props) {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={children}
        />
      </FormGroup>
    </div>
  );
}

export default TodoItem;
