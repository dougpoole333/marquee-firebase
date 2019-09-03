import { EmptyState, Spinner, Layout, Page, Select, Button } from '@shopify/polaris';
import Cookies from 'js-cookie';
import Selector from './selector.js'
import Window from './window.js'
import Help from './help.js'

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Page>
            <Selector />
            <Window />
            <Help />
      </Page>
    );
  };
}

export default Index;
