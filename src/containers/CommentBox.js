import React from 'react';
import CommentList from '../components/CommentList';

class CommentBox extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    movies: [
      {film: "Sausage Party", text: "A sausage strives to discover the truth about his existence."},
      {film: "Cafe Society", text: "In the 1930s, a Bronx native moves to Hollywood and falls in love with a young woman who is seeing a married man."},
      {film: "Morgan", text: "A corporate risk-management consultant must decide whether or not to terminate an artificially created humanoid being."},
      {film: "The 9th Life of Louis Drax", text: "A psychologist who begins working with a young boy who has suffered a near-fatal fall finds himself drawn into a mystery that tests the boundaries of fantasy and reality."},
      {film: "Naam Hai Akira", text: "A gripping action thriller about a college girl Akira, who has grown up with the ideals of being self reliant. Her life spirals out of control when she becomes unwittingly involved in a crime involving four corrupt police officers."},
      {film: "Equity", text: "Senior investment banker Naomi Bishop is threatened by a financial scandal and must untangle a web of corruption."},
      {film: "Things to Come", text: "A philosophy teacher soldiers through the death of her mother, getting fired from her job, and dealing with a husband who is cheating on her."}
    ]
  }
}
  render(){
    return(
      <div>
        <h2>Movies</h2>
      <CommentList movies={this.state.movies} />
    </div>

    )
  }
}
export default CommentBox;
