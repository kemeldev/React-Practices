import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
  activeCount: number
  completedCount: number
  filtersSelected: FilterValue
  handleFilterChange: (filer: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filtersSelected,
  handleFilterChange,
  onClearCompleted
}) => {

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
      </span>

      <Filters
        filterSelected={ }
        onFilterChange={() => { }}
      />

    </footer>
  )
}