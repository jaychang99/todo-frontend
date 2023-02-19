import { CommonApiResponse } from 'types/api/common';

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
  due?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoApiResponse extends CommonApiResponse<Todo[]> {}
