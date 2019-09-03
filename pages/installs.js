import { EmptyState, Spinner, Layout, Page, Select, Button } from '@shopify/polaris';

class Installs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      installs: []
    };
  }

  componentDidMount(){
    this.getInstalls()
  }

  getInstalls = async () => {
      let urlParams = new URLSearchParams(window.location.search);
      let shopOrigin = urlParams.get('shop');
      let shopName = urlParams.get('shop').split(".")[0]
      fetch("/"+shopName+"/installs", { method: "GET"})
      .then(response => response.json())
      .then(json =>{
          this.setState({installs: json.data})
      })
  }

  renderInstalls = () => {
    if (this.state.installs.length > 0){
      let arr = this.state.installs.map( (el, index) => { return(
          <h1 id={index}>{el.themeName}, {el.themeID}, {el.date}</h1>
        )
      })
      return arr
    }
  }

  render(){

    return(
      <Layout.Section>
        {this.state.installs.length > 0 ? this.renderInstalls() : <Spinner/>}
      </Layout.Section>
    )
  }



}

export default Installs
