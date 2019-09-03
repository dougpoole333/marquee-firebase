import { EmptyState, Spinner, Layout, Page, Select, Button } from '@shopify/polaris';
import Cookies from 'js-cookie';
import Selector from './selector.js'
import Window from './window.js'
import Help from './help.js'

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      auth: false
    };
  }

  componentDidMount(){
    let urlParams = new URLSearchParams(window.location.search);
    let shopOrigin = urlParams.get('shop');
    shopOrigin ? this.setState({auth: true}) : null
  }

  renderDisplay = (auth) => {
    if(auth){
      return (
      <Layout.Section>
        <Selector />
        <Window />
        <Help />
      </Layout.Section>
      )
    } else {
      return(
        <EmptyState>
        </EmptyState>
      )
    }
  }

  render() {
    console.log(this.state.auth)
    return (
      <Page>
        {this.renderDisplay(this.state.auth)}
      </Page>
    );
  };
}

export default Index;
