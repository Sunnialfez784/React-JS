import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import ArrowText from './ArrowText'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <HeroText />
      <ArrowText />
    </div>
  )
}

export default LeftContent