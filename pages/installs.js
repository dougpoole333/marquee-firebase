import { EmptyState, Spinner, Layout, Page, Select, Button } from '@shopify/polaris';
import moment from 'moment'

import "./styles/installs.css"

class Installs extends React.Component {
  constructor(props){
    super(props);
  }

  renderInstalls = () => {
    if (this.props.installs.length > 0){
      let arr = this.props.installs.map( (el, index) => { return(
        <div  id={index} className="line">
          <a
            className="target-link"
            target="_blank"
            style={{textDecoration: 'none'}}
            href={'http://' + this.props.shopName + `.myshopify.com/admin/themes/${el.themeID}/editor`}>
            {el.themeName}
          </a>
          <div className="theme-info">
            <h1>ID: {el.themeID}</h1>
            <h1>{moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}</h1>
            <h1>{moment(el.date).fromNow()}</h1>
          </div>
        </div>
        )
      })
      return arr
    }
  }

  render(){

    return(
      <Layout.Section>
        {this.renderInstalls()}
      </Layout.Section>
    )
  }



}

export default Installs
