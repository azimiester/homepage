import * as React from 'react';

class Sidebar extends React.Component{
  render() {
    const links = this.props.links || [];
    return (
      <aside>
          <div class="name-title">
            <h2>Azeem Akhter </h2>
            <h4>- Software Developer</h4>
          </div>
          <ul>
            {
                links.map((link, id) => {
                    return <li key={id}><a  href={link.url} >{link.title}</a></li>;
                })
            }
            </ul>
      </aside>
    );
  }
}
export default Sidebar;
