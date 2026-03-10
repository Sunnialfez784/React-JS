import Section1 from './components/page1/Section1'
import Section2 from './components/page2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'orange',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'green',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1507537417841-81e85feb9bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'brown',
      tag:'Undergreat'
    },
    {
      img:'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'gray',
      tag:'Underbanked'
    }
  ];

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App