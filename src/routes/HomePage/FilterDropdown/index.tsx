import { Button } from "@/components/ui/button";

const FilterCombobox = () => {
    return (
    <div className="flex flex-col">
        <text className="text-xl text-darkBlue font-bold pb-2">Filter By</text>
        <Button>Choose sort by</Button>
    </div>
  )
}

export default FilterCombobox