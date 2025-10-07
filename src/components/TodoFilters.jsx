import { FILTERS } from '../utils/constants';

export const TodoFilters = ({ currentFilter, onFilterChange, itemsLeft, onClearCompleted, hasCompleted }) => {
  return (
    <div className="todo-filters">
      <span className="items-left">{itemsLeft} items left</span>
      
      <div className="filter-buttons">
        {Object.values(FILTERS).map(filter => (
          <button
            key={filter}
            className={`filter-button ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      {hasCompleted && (
        <button onClick={onClearCompleted} className="clear-button">
          Clear completed
        </button>
      )}
    </div>
  );
};