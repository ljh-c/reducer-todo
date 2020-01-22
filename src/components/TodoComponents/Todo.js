import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

function Todo({ todo, dispatch }) {
  return (
    <Card>
    {todo.completed ? (
      <CardHeader className="when-completed">
        Completed {todo.completed_on}
      </CardHeader>
    ) : null}
      <CardBody className={todo.completed ? "completed" : null}
    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}>
        <CardText>{todo.item}</CardText>
      </CardBody>
    </Card>
  );
}

export default Todo;