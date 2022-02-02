import { toJS } from "mobx";
import { Link } from "react-router-dom";

const LinkElem = (props: any) => {
  return (
    <td>
      <Link to={`/${toJS(props.dataItem.id)}`}>{toJS(props.dataItem.username)}</Link>
    </td>
  )
}

export default LinkElem;