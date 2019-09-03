import { EmptyState, Spinner, Layout, Page, Select, Button } from '@shopify/polaris';

class Installs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      installs: []
    };
  }

  renderInstalls = () => {
    if (this.props.installs.length > 0){
      let arr = this.props.installs.map( (el, index) => { return(
        <div className="line">
          <h1 id={index}>{el.themeName}, {el.themeID}, {el.date}</h1>
          <a
            target="_blank"
            style={{textDecoration: 'none'}}
            href={'http://' + this.props.shopName + `.myshopify.com/admin/themes/${el.themeID}/editor`}>
              open theme in customizer
          </a>
        </div>
        )
      })
      return arr
    }
  }

  render(){

    return(
      <Layout.Section>
        {!this.props.loading ? this.renderInstalls() : <Spinner/>}
      </Layout.Section>
    )
  }



}

export default Installs
