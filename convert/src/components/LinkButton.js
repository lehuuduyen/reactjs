import {Link} from "react-router-dom";

function LinkButton(props){
	return <Link to={props.to || "/"} className="btn"><span>{props.children}</span></Link>
}
export default LinkButton;