import * as React from "react";
import { connect } from "react-redux";
import { API_ROOT } from '../statics/';
import {getLinksFromApi} from "../shared/actionCreators";

class Sidebar extends React.Component {

  componentDidMount(){
    if (!this.props.links.length){
      this.props.getLinks(`${API_ROOT}/menus/v1/menus/top`);
    }
  }
  render() {
    const links = this.props.links || [];
    return (
      <aside>
        <div className="name-title">
          <h2>Azeem Akhter </h2>
          <h4>- Software Developer</h4>
        </div>
        <ul>
          {links.map((link, id) => {
            return (
              <li key={id}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = state => ({ links: state.links });
const mapDispatchToProps = dispatch => ({
  getLinks(url) {
    dispatch(getLinksFromApi(url));
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
