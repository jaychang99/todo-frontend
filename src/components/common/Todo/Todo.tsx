import { Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import { clientAxios } from 'api/commonAxios';
import { fetcher } from 'api/fetcher';
import TodoItem from 'components/common/Todo/_elements/TodoItem/TodoItem';
import React from 'react';
import { useQuery } from 'react-query';
import { TodoApiResponse } from 'types/api/todo';

function Todo() {
  const query = useQuery<TodoApiResponse>('todos', () => {
    return fetcher('/todos');
  });

  return (
    <div>
      {query?.data?.result.map((todo) => (
        <>
          <TodoItem key={todo.id} {...todo}>
            {todo.name}
          </TodoItem>
        </>
      ))}
    </div>
  );
}

export default Todo;
