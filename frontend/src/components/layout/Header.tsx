import FilterDropdownButton from '@/components/shared/filter-button-dropdown'
import SearchBox from '@/components/shared/SearchBox'

const Header = () => {
  return (
    <nav className='w-100 h-[6rem] gap-[1rem] flex justify-between items-center px-3 bg-[#ecedee] rounded-lg m-[1rem] lower-shadow '>
        <SearchBox/>
        <FilterDropdownButton/>
    </nav>
  )
}

export default Header