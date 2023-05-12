
import Card from "react-bootstrap/Card";
import { Title } from "./shared/StyledComponents";
import { Link } from "react-router-dom";
import './card.css'
function CardComponent({ data }) {
  
  return (
   
    <Card className="mt-5">
      {data?.images ? <Card.Img variant="top" src={data?.images[0]} /> : null}
     
      <Card.Body>
        <Title>{data.title}</Title>
        <Card.Text>{data.description}</Card.Text>
        <Link className="update" to={`/update-prodcuts/${data.id}`} >Update</Link>
        <Link className="delete" to={`/delete-prodcuts/${data.id}`} >delete</Link>
       
      </Card.Body>
      
    </Card>
  );
}

export default CardComponent;
