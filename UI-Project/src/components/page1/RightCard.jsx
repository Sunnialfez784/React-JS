import RightCardContent from "./RightCardContent"

const RightCard = ({img,tag,id}) => {
  return (
    <div className="h-full w-80 bg-gray-950 shrink-0 overflow-hidden relative rounded-3xl">
      <img className="h-full w-full object-cover" src={img} alt="" />
      <RightCardContent tag={tag} id={id}/>
    </div>
  )
}

export default RightCard