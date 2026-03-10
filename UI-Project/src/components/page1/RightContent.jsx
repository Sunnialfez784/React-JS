import RightCard from './RightCard'

const RightContent = ({users}) => {
  return (
    <div id='right' className='h-full overflow-x-auto rounded-3xl flex flex-nowrap gap-10 w-2/3 p-6'>
      {users.map((elem,idx) =>{
        return <RightCard key={idx} id={idx+1} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent