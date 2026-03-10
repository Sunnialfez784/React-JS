import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({users}) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 px-16  h-[90vh]'>
      <LeftContent />
      <RightContent users={users}/>
    </div>
  )
}

export default Page1Content