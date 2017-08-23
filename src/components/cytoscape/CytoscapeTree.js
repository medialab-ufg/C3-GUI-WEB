import React, {Component} from 'react';
import cytoscape from 'cytoscape';

class CytoscapeTree extends Component {
  constructor(props) {
    super(props);
    this.state = {cy: {}};
  }

  componentWillMount() {
    this.state.cy = {};
  }

  render() {
    return (
      <div>
        <p> Cytoscape!</p>
      </div>
    );
  }
}

export default CytoscapeTree;
