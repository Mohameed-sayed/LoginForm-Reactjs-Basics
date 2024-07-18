import { ReactNode } from "react" 
interface IHead{
    title:string;
    children:ReactNode
}
const Heading = ({title, children }: IHead)=>{
return (
<h2 style={{fontSize: 40 , textAlign: "center"}}>
{title}
{children}
</h2>
)
}

export default Heading 
