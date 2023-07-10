import { type FilterValue } from "../types"
import Filter from "./Filters"

interface FooterProps {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

export default function Footer({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}: FooterProps) {
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong> pending task
      </span>

      <Filter
        filterSelected={filterSelected}
        onFilterChange={() => {}}
      />
    </footer>
  )
}
