import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

interface Props {
  children: string;
  isCompleted: boolean;
}

function TodoItem({ children, isCompleted }: Props) {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isCompleted} />}
          label={children}
        />
      </FormGroup>
    </div>
  );
}

export default TodoItem;
