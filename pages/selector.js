import { EmptyState, Spinner, Layout, Page, Card, Select, Button } from '@shopify/polaris';
import Installs from './installs.js'
import Cookies from 'js-cookie';

import "./styles/selector.css"

class Selector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'default',
      shopName: '',
      selected: '',
      themes: [],
      installs: []
    };
  }

  componentDidMount(){
    this.getThemes();
    this.getInstalls()
  }

  render() {
    return (
        <Card>
          {this.renderSelector()}
          {this.renderInstalls()}
        </Card>
    );
  };

  getThemes = async () => {
    let urlParams = new URLSearchParams(window.location.search);
    let shopOrigin = urlParams.get('shop');
    let shopName = urlParams.get('shop').split(".")[0]
    fetch("/themes/" + shopName, { method: "GET"})
    .then(response => response.json())
    .then(json => this.setState({themes: json.data.themes, shopName: shopName, loading: false}))
  };

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

  handleChange = (newValue) => {
    this.setState({selected: newValue});
  };

  triggerReset = () => {
    this.setState({
      selected: ''
    })
  }

  renderStatus = () => {
    if (this.state.status == 'loading'){
      return(
        <div> loading... </div>
      )}
    else if (this.state.status == 'success'){
      return(
        <div> Marquee successfully added to theme!</div>
      )
    }
  }

  renderSelector = () => {
      return(
        <div className="selector-header">
          <Select
            options = {this.state.themes ? this.state.themes.map(el => {return{label: `${el.name}`, value:`${el.id}`}}) : null}
            onChange={this.handleChange}
            value={this.state.selected}
            placeholder = "select a theme"
            />
          {this.renderStatus()}
          <Button primary onClick={this.assetUpdateRequest}>Add</Button>
        </div>
      )
  }

  renderInstalls = () => {
      return(
        <Card><Installs shopName={this.state.shopName} installs={this.state.installs} status={this.state.status}/></Card>
      )
  }

  assetUpdateRequest = async () => {
    this.setState({status: 'loading'})
    var fetchUrl = `${this.state.shopName}/${this.state.selected}`;
    var method = "PUT";
    fetch(fetchUrl, { method: method })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success'){
        this.setState({loading: false})
      }
    })
    .then( () => {
      this.getInstalls()
    })
    .then( () => {
      this.setState({status: 'success'})
    })
  }
}

export default Selector;
