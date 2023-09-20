import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { Status } from '../../types/Status';

type Props = {
  todos: Todo[];
  filterBy: Status;
  setFilterBy: React.Dispatch<React.SetStateAction<Status>>;
};

export const TodosFilter: React.FC<Props> = (
  {
    todos,
    filterBy,
    setFilterBy,
  },
) => {
  const handleSetFilteredTodos = (filter: Status) => {
    setFilterBy(filter);
  };

  const completedTodos
    = todos.filter(todo => todo.completed).length;

  const uncompletedTodos
    = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="todoapp__footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${uncompletedTodos} items left`}
      </span>
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: (filterBy === Status.all),
          })}
          onClick={() => handleSetFilteredTodos(Status.all)}
        >
          All
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: (filterBy === Status.completed),
          })}
          onClick={() => handleSetFilteredTodos(Status.completed)}
        >
          Completed
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: (filterBy === Status.active),
          })}
          onClick={() => handleSetFilteredTodos(Status.active)}
        >
          Active
        </a>

      </nav>
      {
        completedTodos && (
          <button
            type="button"
            className="todoapp__clear-completed"
          >
            Clear completed
          </button>
        )
      }
    </footer>
  );
};