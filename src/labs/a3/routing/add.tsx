import { useParams } from "react-router";
const Add = () => {
    const { a, b } = useParams();
  return (
    <div> 
        <h2>Add Path Parameters</h2>

      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>

    );
}
 
export default Add;